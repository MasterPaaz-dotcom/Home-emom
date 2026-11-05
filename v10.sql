create or replace function public.lb_board(p_token uuid, p_period text default 'week', p_gender text default null)
returns jsonb language plpgsql security definer set search_path = public as $$
declare v_uid uuid; v_admin boolean; v_g text; v_from date; v_today date := (now() at time zone 'Africa/Dar_es_Salaam')::date; v_res jsonb;
begin
  select s.user_id into v_uid from sessions s where s.token = p_token;
  if v_uid is null then raise exception 'bad_session'; end if;
  select p.is_admin, p.gender into v_admin, v_g from profiles p where p.id = v_uid;
  if not coalesce(v_admin, false) or p_gender not in ('male','female') then p_gender := v_g; end if;
  v_from := case p_period when 'week' then date_trunc('week', v_today::timestamp)::date when 'month' then date_trunc('month', v_today::timestamp)::date else date '1900-01-01' end;
  v_res := (
    with t as (
      select p.id, p.name, sum(w.points)::int as pts, count(*)::int as wk, coalesce(sum(w.mins),0)::int as mn
      from workouts w join profiles p on p.id = w.user_id
      where w.day >= v_from and p.gender = p_gender
      group by p.id, p.name),
    r as (select t.*, rank() over (order by pts desc, wk desc) as pos from t)
    select jsonb_build_object('gender', p_gender,
      'rows', coalesce((select jsonb_agg(jsonb_build_object('pos', x.pos, 'name', x.name, 'points', x.pts, 'workouts', x.wk, 'mins', x.mn, 'me', x.id = v_uid) order by x.pos, x.name)
                        from (select * from r order by pos, name limit 20) x), '[]'::jsonb),
      'me', (select jsonb_build_object('pos', r.pos, 'points', r.pts, 'workouts', r.wk, 'mins', r.mn) from r where r.id = v_uid))
  );
  return v_res;
end $$;

create or replace function public.my_history(p_token uuid, p_limit int default 100)
returns jsonb language plpgsql security definer set search_path = public as $$
declare v_uid uuid;
begin
  select s.user_id into v_uid from sessions s where s.token = p_token;
  if v_uid is null then raise exception 'bad_session'; end if;
  return coalesce((select jsonb_agg(to_jsonb(x)) from (
    select w.day, w.prog, w.stage, w.equip, w.workout_id, w.workout_name, w.mins, w.mode, w.points, w.created_at
    from workouts w where w.user_id = v_uid order by w.created_at desc limit least(greatest(p_limit, 1), 200)) x), '[]'::jsonb);
end $$;

create or replace function public.lb_admin(p_token uuid)
returns jsonb language plpgsql security definer set search_path = public as $$
declare v_uid uuid; v_today date := (now() at time zone 'Africa/Dar_es_Salaam')::date; v_wk date;
begin
  select s.user_id into v_uid from sessions s where s.token = p_token;
  if v_uid is null then raise exception 'bad_session'; end if;
  if not coalesce((select p.is_admin from profiles p where p.id = v_uid), false) then raise exception 'forbidden'; end if;
  v_wk := date_trunc('week', v_today::timestamp)::date;
  return jsonb_build_object(
    'users', coalesce((select jsonb_agg(jsonb_build_object('id', p.id, 'name', p.name, 'gender', p.gender, 'is_admin', p.is_admin, 'joined', p.created_at,
        'workouts', coalesce(s.wk, 0), 'points', coalesce(s.pts, 0), 'mins', coalesce(s.mn, 0), 'last_day', s.last_day, 'week_workouts', coalesce(s.wk7, 0))
        order by s.last_day desc nulls last, p.created_at desc)
      from profiles p left join (
        select w.user_id, count(*) as wk, sum(w.points) as pts, sum(w.mins) as mn, max(w.day) as last_day, count(*) filter (where w.day >= v_wk) as wk7
        from workouts w group by w.user_id) s on s.user_id = p.id), '[]'::jsonb),
    'recent', coalesce((select jsonb_agg(jsonb_build_object('name', p.name, 'day', w.day, 'workout', w.workout_id || ' ' || w.workout_name, 'mins', w.mins, 'points', w.points) order by w.created_at desc)
      from (select * from workouts order by created_at desc limit 30) w join profiles p on p.id = w.user_id), '[]'::jsonb));
end $$;

grant execute on function public.lb_board(uuid, text, text), public.my_history(uuid, int), public.lb_admin(uuid) to anon, authenticated;
