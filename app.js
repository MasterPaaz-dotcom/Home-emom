'use strict';
window.EMOM_JS = 'v16';
/* ---------- Workout data (edit reps here) ---------- */
const PROGRAMMES = {
  women: { label: 'WOMEN', workouts: [
    { id: 'W1', name: 'Glutes & Core', desc: 'Lower body, basic pushing and core.', ex: [
      ['Bodyweight squats', '10 reps', 'Comfortable depth; knees track in line with toes.'],
      ['Glute bridges', '12 reps', 'Pause at the top; avoid arching the lower back.'],
      ['Wall push-ups', '8 reps', 'Move closer to the wall to make it easier.'],
      ['Dead bugs', '5 per side', 'Move slowly; keep the lower back gently supported.']]},
    { id: 'W2', name: 'Hips & Legs', desc: 'Leg strength, hip control and trunk stability.', ex: [
      ['Sumo squats', '10 reps', 'Comfortable stance and range.'],
      ['Standing side leg raises', '10 per leg', 'Hold a wall; keep toes facing forward.'],
      ['Standing calf raises', '12 reps', 'Rise smoothly and lower with control.'],
      ['Bird dogs', '5 per side', 'Reach opposite arm and leg without twisting hips.']]},
    { id: 'W3', name: 'Glute Focus', desc: 'Glutes plus accessible upper-body work.', ex: [
      ['Glute bridges', '12 reps', 'Keep ribs down and squeeze glutes at the top.'],
      ['Donkey kicks', '8 per leg', 'Keep hips level; avoid swinging.'],
      ['Fire hydrants', '8 per leg', 'Lift without rotating your torso.'],
      ['Wall push-ups', '8 reps', 'Choose a distance that allows controlled reps.']]},
    { id: 'W4', name: 'Full Body & Core', desc: 'Whole-body movement and balance.', ex: [
      ['Bodyweight squats', '10 reps', 'Use a chair behind you as a depth target if helpful.'],
      ['Supported reverse lunges', '5 per leg', 'Hold support; shorten the step if needed.'],
      ['Wall push-ups', '8 reps', 'Keep elbows at a comfortable angle.'],
      ['Bird dogs', '5 per side', 'Move slowly; keep the trunk steady.']]}
  ]},
  men: { label: 'MEN', workouts: [
    { id: 'M1', name: 'Chest & Core', desc: 'Pushing foundation, legs and trunk.', ex: [
      ['Push-ups', '5 reps', 'Standard, knee or wall variation; stop before form breaks.'],
      ['Bodyweight squats', '10 reps', 'Control the lowering phase and stand tall.'],
      ['Forearm plank', '15 seconds', 'Keep hips level; use knees-down plank if needed.'],
      ['Superman raises', '8 reps', 'Lift gently; keep neck neutral.']]},
    { id: 'M2', name: 'Shoulders & Legs', desc: 'Shoulder control, legs and posterior chain.', ex: [
      ['Pike push-ups', '4 reps', 'Use a small range. Too hard? Do wall push-ups instead.'],
      ['Reverse lunges', '5 per leg', 'Short, controlled step; hold support if needed.'],
      ['Glute bridges', '12 reps', 'Pause briefly at the top.'],
      ['Prone W raises', '10 reps', 'Draw elbows toward ribs and squeeze shoulder blades.']]},
    { id: 'M3', name: 'Upper Body & Back', desc: 'Chest, upper-back activation and core.', ex: [
      ['Push-ups', '5 reps', 'Choose a variation that keeps every rep controlled.'],
      ['Prone W raises', '10 reps', 'Keep shoulders away from ears.'],
      ['Reverse snow angels', '8 reps', 'Move slowly; lift only as high as comfortable.'],
      ['Dead bugs', '6 per side', 'Keep movement slow and controlled.']]},
    { id: 'M4', name: 'Full Body Strength', desc: 'Push, legs and conditioning.', ex: [
      ['Push-ups', '5 reps', 'Use a suitable variation; leave a little in reserve.'],
      ['Bodyweight squats', '12 reps', 'Keep heels grounded and move smoothly.'],
      ['Reverse lunges', '5 per leg', 'Use support if balance is challenging.'],
      ['Mountain climbers', '8 per side', 'Slow step-in version is fine; keep shoulders over hands.']]}
  ]},
  mama: { label: 'MAMA', workouts: [
    { id: 'P1', name: 'Core Reconnect', desc: 'Breathing, pelvic floor and gentle core.', ex: [
      ['Breathing and pelvic floor lift', '5 breaths', 'Breathe in and let your belly rise. Breathe out, gently lift your pelvic floor and draw your lower belly in.'],
      ['Pelvic tilts', '8 reps', 'Knees bent. Gently flatten your lower back, then relax. Small, slow movement.'],
      ['Heel slides', '6 per side', 'Slide one heel away along the floor, then back. Keep your lower back steady.'],
      ['Glute bridges', '8 reps', 'Lift only as high as comfortable. Breathe out as you lift.']]},
    { id: 'P2', name: 'Glutes & Legs', desc: 'Gentle leg and glute strength.', ex: [
      ['Chair squats', '8 reps', 'Sit down slowly, then stand up, breathing out as you stand.'],
      ['Glute bridges', '10 reps', 'Pause at the top and breathe out as you lift.'],
      ['Standing side leg raises', '8 per leg', 'Hold a wall or chair; keep toes facing forward.'],
      ['Standing calf raises', '10 reps', 'Rise smoothly and lower with control.']]},
    { id: 'P3', name: 'Gentle Strength', desc: 'Upper body, hips and back, no belly strain.', ex: [
      ['Wall push-ups', '6 reps', 'Stand tall and stop before your form breaks.'],
      ['Clamshells', '8 per side', 'Lie on your side, knees bent. Keep your feet together and open your top knee.'],
      ['Cat-cow', '6 reps', 'Move slowly with your breath. Round your back, then gently arch. No pain.'],
      ['Breathing and pelvic floor lift', '5 breaths', 'Breathe in and let your belly rise. Breathe out and gently lift your pelvic floor.']]},
    { id: 'P4', name: 'Steady Progress', desc: 'A little more challenge, once you feel strong.', ex: [
      ['Toe taps', '6 per side', 'On your back, knees bent. Lower one foot to the floor and lift back. Stop if your belly bulges along the middle.'],
      ['Bird dogs', '4 per side', 'Reach opposite arm and leg slowly. Keep your trunk steady.'],
      ['Chair squats', '10 reps', 'Sit down slowly, then stand up, breathing out as you stand.'],
      ['Breathing and pelvic floor lift', '5 breaths', 'Breathe in and let your belly rise. Breathe out and gently lift your pelvic floor.']]}
  ]}
};
/* ---------- Advanced workouts (v6) ----------
   Each workout has 4 slots. A slot lists moves from best to simplest:
   [needs, name, reps, tip]
   needs: '' = no equipment, 'bar' = pull-up bar, 'dip' = dip bar or rings, 'gym' = weights.
   The first move the person can do is used. Every slot ends with a no-equipment move,
   so training at home always works. Gym automatically includes bar and dip. */
const EQUIP = [['bar', 'PULL-UP BAR'], ['dip', 'DIP BAR / RINGS'], ['gym', 'GYM']];
const ADVANCED = {
  men: [
    { id: 'MA1', name: 'Pull & Push', desc: 'Pulling, hanging core, pushing and legs.', slots: [
      [['bar', 'Pull-ups', '5 reps', 'Start from a full hang and bring your chin over the bar.'], ['gym', 'Dumbbell rows', '8 per arm', 'Flat back; pull the elbow toward your hip.'], ['', 'Prone W raises', '10 reps', 'Draw elbows toward ribs and squeeze shoulder blades.']],
      [['bar', 'Hanging leg raises', '7 reps', 'Do not swing; lift your legs with your abs.'], ['', 'Lying leg raises', '10 reps', 'Press your lower back down; lower your legs slowly.']],
      [['gym', 'Dumbbell bench press', '10 reps', 'Lower with control until your elbows are just below the bench.'], ['', 'Push-ups', '10 reps', 'Body in one line; chest to just above the floor.']],
      [['gym', 'Goblet squats', '15 reps', 'Hold one dumbbell at your chest; knees track over toes.'], ['', 'Bodyweight squats', '15 reps', 'Control the way down and stand tall.']]
    ]},
    { id: 'MA2', name: 'Pike & Core', desc: 'Shoulders, L-sit core, legs and triceps.', slots: [
      [['gym', 'Dumbbell shoulder press', '8 reps', 'Press straight up; keep your ribs down.'], ['', 'Pike push-ups', '5 reps', 'Hips high; lower the top of your head toward the floor.']],
      [['dip', 'L-sit on bars', '10 seconds', 'Press down, lock your arms, lift your legs. Bend your knees if needed.'], ['', 'L-sit crunches', '7 reps', 'Sit tall with legs straight; pull your knees in and back out.']],
      [['gym', 'Dumbbell Bulgarian split squats', '8 per leg', 'Back foot on a bench; drop straight down.'], ['', 'Sissy squats', '10 reps', 'Hold a support; lean back and let your knees travel forward slowly.']],
      [['dip', 'Dips (bars or rings)', '6 reps', 'Lower until upper arms are parallel. Rings need extra control.'], ['', 'Bench dips', '15 reps', 'Hands on a stable bench or chair; keep your hips close to it.']]
    ]},
    { id: 'MA3', name: 'Dips & Pull', desc: 'Dips, chin-ups, hanging core and jumps.', slots: [
      [['dip', 'Dips (bars or rings)', '5 reps', 'Shoulders down; lower with control.'], ['', 'Diamond push-ups', '8 reps', 'Hands close under your chest; elbows brush your ribs.']],
      [['bar', 'Chin-ups', '6 reps', 'Palms facing you; pull your chest toward the bar.'], ['gym', 'Dumbbell rows', '8 per arm', 'Flat back; pull the elbow toward your hip.'], ['', 'Reverse snow angels', '8 reps', 'Move slowly; lift only as high as comfortable.']],
      [['bar', 'Hanging leg raises', '10 reps', 'Do not swing; lift your legs with your abs.'], ['', 'Lying leg raises', '12 reps', 'Press your lower back down; lower your legs slowly.']],
      [['gym', 'Kettlebell swings', '15 reps', 'Hinge at the hips and snap up; your arms just guide the weight.'], ['', 'Jumping squats', '15 reps', 'Land softly and go straight into the next rep.']]
    ]},
    { id: 'MA4', name: 'Planche & Hinge', desc: 'Planche push-ups, core, hinge and pulling.', slots: [
      [['', 'Pseudo planche push-ups', '5 reps', 'Hands by your hips, lean forward over them; elbows stay close.']],
      [['dip', 'Support hold (bars or rings)', '20 seconds', 'Arms locked, shoulders pushed down; keep rings still.'], ['', 'Sitting crunches', '7 reps', 'Sit back on your hands, pull your knees in and extend again.']],
      [['gym', 'Dumbbell Romanian deadlifts', '12 reps', 'Soft knees; push your hips back and keep your back flat.'], ['', 'Bodyweight RDL', '15 reps', 'Soft knees; push your hips back and keep your back flat.']],
      [['bar', 'Pull-ups', '6 reps', 'Start from a full hang and bring your chin over the bar.'], ['gym', 'Dumbbell rows', '8 per arm', 'Flat back; pull the elbow toward your hip.'], ['', 'Prone W raises', '10 reps', 'Draw elbows toward ribs and squeeze shoulder blades.']]
    ]}
  ],
  women: [
    { id: 'WA1', name: 'Glutes & Core', desc: 'Stronger glutes, legs, pushing and core.', slots: [
      [['gym', 'Dumbbell hip thrusts', '12 reps', 'Back on a bench, dumbbell on your hips; squeeze at the top.'], ['', 'Single-leg glute bridges', '10 per leg', 'Keep hips level; push through the heel.']],
      [['gym', 'Goblet squats', '12 reps', 'Hold a dumbbell at your chest; knees track over toes.'], ['', 'Sumo squats', '15 reps', 'Wide stance; keep your chest up and knees out.']],
      [['', 'Push-ups', '8 reps', 'Standard or knee version; stop before form breaks.']],
      [['bar', 'Hanging knee raises', '8 reps', 'Do not swing; lift your knees with your abs.'], ['', 'Dead bugs', '8 per side', 'Move slowly; keep your lower back gently supported.']]
    ]},
    { id: 'WA2', name: 'Hips & Legs', desc: 'Leg strength, hinge and hip control.', slots: [
      [['gym', 'Dumbbell reverse lunges', '8 per leg', 'Short, controlled step back; chest up.'], ['', 'Reverse lunges', '8 per leg', 'Short, controlled step; hold support if needed.']],
      [['gym', 'Dumbbell Romanian deadlifts', '12 reps', 'Soft knees; push your hips back and keep your back flat.'], ['', 'Single-leg RDL', '8 per leg', 'Hold a support if needed; keep your hips square.']],
      [['gym', 'Dumbbell sumo squats', '12 reps', 'Hold one dumbbell between your legs.'], ['', 'Sumo squats', '15 reps', 'Wide stance; keep your chest up and knees out.']],
      [['', 'Bird dogs', '8 per side', 'Reach opposite arm and leg without twisting your hips.']]
    ]},
    { id: 'WA3', name: 'Glutes & Upper Body', desc: 'Glutes plus pulling and pushing strength.', slots: [
      [['gym', 'Barbell hip thrusts', '10 reps', 'Shoulders on a bench, bar over your hips; squeeze glutes at the top.'], ['', 'Donkey kicks', '12 per leg', 'Keep hips level; avoid swinging.']],
      [['bar', 'Chin-up negatives', '4 reps', 'Jump to the top, then lower yourself slowly for 4 seconds.'], ['gym', 'Dumbbell rows', '10 per arm', 'Flat back; pull the elbow toward your hip.'], ['', 'Prone W raises', '10 reps', 'Draw elbows toward ribs and squeeze shoulder blades.']],
      [['dip', 'Dips (bars or rings)', '4 reps', 'Use a band or keep a foot on the floor if needed.'], ['gym', 'Dumbbell shoulder press', '10 reps', 'Press straight up; keep your ribs down.'], ['', 'Push-ups', '8 reps', 'Standard or knee version; stop before form breaks.']],
      [['', 'Fire hydrants', '10 per leg', 'Lift without rotating your torso.']]
    ]},
    { id: 'WA4', name: 'Full Body & Core', desc: 'Whole-body strength, conditioning and core.', slots: [
      [['gym', 'Goblet squats', '12 reps', 'Hold a dumbbell at your chest; knees track over toes.'], ['', 'Jumping squats', '10 reps', 'Land softly; keep knees in line with toes.']],
      [['', 'Push-ups', '8 reps', 'Standard or knee version; stop before form breaks.']],
      [['', 'Mountain climbers', '10 per side', 'Shoulders over hands; drive your knees in with control.']],
      [['bar', 'Hanging knee raises', '8 reps', 'Do not swing; lift your knees with your abs.'], ['', 'Dead bugs', '8 per side', 'Move slowly; keep your lower back gently supported.']]
    ]}
  ]
};
function ownSet(list) { const s = new Set(list); if (s.has('gym')) { s.add('bar'); s.add('dip'); } return s; }
function resolveAdvanced(prog, equip) {
  const own = ownSet(equip || []);
  return ADVANCED[prog].map(w => ({ id: w.id, name: w.name, desc: w.desc,
    ex: w.slots.map(sl => { const o = sl.find(x => !x[0] || own.has(x[0])); return [o[1], o[2], o[3]]; }) }));
}
const DURATIONS = [12, 16, 20];

/* ---------- Exercise library for "Build your own" (edit here) ---------- */
const EXCAT = [['push', 'PUSH', 'PUSH'], ['pull', 'PULL', 'PULL'], ['core', 'CORE', 'TUMBO'], ['legs', 'LEGS', 'MIGUU'], ['wt', 'WEIGHTS', 'UZITO']];
// [name, category, standard reps, needs ('' none, 'bar' pull-up bar, 'wt' kettlebell or dumbbell), how to do it]
const EXLIB = [
  ['Push-ups', 'push', '10 reps', '', 'Hands under your shoulders, body in one straight line from head to heels. Lower your chest to just above the floor, then press back up. Knees down is fine if you cannot keep the line.'],
  ['Wide push-ups', 'push', '8 reps', '', 'Like a push-up, but with your hands a little wider than your shoulders. This works your chest more. Keep your body straight and lower slowly.'],
  ['Pike push-ups', 'push', '6 reps', '', 'Hips high like an upside-down V, hands and feet on the floor. Bend your elbows to lower the top of your head toward the floor, then press back up. This trains your shoulders.'],
  ['Diamond push-ups', 'push', '6 reps', '', 'Put your hands together under your chest, with thumbs and index fingers touching to make a diamond. Keep your elbows close to your ribs as you lower and press. This works your triceps.'],
  ['Pseudo planche push-ups', 'push', '5 reps', '', 'Turn your fingers to point back or out, with your hands near your hips. Lean your shoulders forward past your hands, then bend your elbows close to your body and press up. Hard on wrists and shoulders, so lean only as far as is comfortable.'],
  ['Mike Tyson push-ups', 'push', '5 reps', '', 'Get in push-up position with the backs of your feet against a wall. Lower your chest like a normal push-up. As you press up, rock your hips back toward your heels, then slide forward to the start. One flowing move, so go slowly at first.'],
  ['Archer push-ups', 'push', '4 per side', '', 'Hands wide apart. Lower your body toward one hand while the other arm stays straight out to the side, then press back up and switch sides. A step toward one-arm push-ups.'],
  ['Pull-ups', 'pull', '6 reps', 'bar', 'Overhand grip, hands about shoulder-width apart. Start hanging with straight arms, pull until your chin passes the bar, then lower slowly.'],
  ['Close-grip pull-ups', 'pull', '5 reps', 'bar', 'Overhand grip with your hands close together, about a fist apart. Pull your chin over the bar. This works your arms and the middle of your back more.'],
  ['Wide-grip pull-ups', 'pull', '5 reps', 'bar', 'Overhand grip with your hands wider than your shoulders. Pull your chest toward the bar. This works your sides and upper back more.'],
  ['Chin-ups', 'pull', '6 reps', 'bar', 'Underhand grip (palms face you), hands shoulder-width apart. Pull your chin over the bar and lower slowly. This uses your biceps more, so it is often easier than a pull-up.'],
  ['Close-grip chin-ups', 'pull', '5 reps', 'bar', 'Underhand grip with your hands close together. Pull your chin over the bar and lower slowly. Strong work for your biceps.'],
  ['Wide-grip chin-ups', 'pull', '4 reps', 'bar', 'Underhand grip with your hands a bit wider than your shoulders. Pull up with your chest leading. A hard one, so stop before your form breaks.'],
  ['L-sit pull-ups', 'pull', '4 reps', 'bar', 'Do a pull-up while holding your legs straight out in front of you, like the letter L. Squeeze your thighs and abs the whole time. Bend your knees if it is too hard.'],
  ['Australian rows', 'pull', '10 reps', 'bar', 'Lie under a low bar, rings or a very sturdy table and hold on with an overhand grip, hands shoulder-width apart. Keep your body straight and pull your chest to the bar, then lower. Feet closer to the bar makes it easier.'],
  ['Close-grip Australian rows', 'pull', '8 reps', 'bar', 'An Australian row with your hands close together. Keep your elbows near your body as you pull your chest to the bar.'],
  ['Wide-grip Australian rows', 'pull', '8 reps', 'bar', 'An Australian row with your hands wider than your shoulders. Pull your chest to the bar and squeeze your shoulder blades together.'],
  ['Underhand Australian rows', 'pull', '10 reps', 'bar', 'An Australian row with an underhand grip (palms face you), like a chin-up on its side. This uses your biceps more.'],
  ['Hanging leg raises (HLR)', 'core', '6 reps', 'bar', 'Hang from a bar with straight arms. Keep your legs together and lift them in front of you to hip height or higher, then lower slowly without swinging. Bend your knees if it is too hard.'],
  ['Sit-ups', 'core', '12 reps', '', 'Lie on your back with your knees bent and feet flat. Curl all the way up until you are sitting, then lower slowly. Cross your arms on your chest and do not pull on your neck.'],
  ['Crunches', 'core', '15 reps', '', 'Lie on your back with your knees bent. Squeeze your abs to curl your head and shoulders off the floor, then lower. Your lower back stays on the floor. A small, controlled move.'],
  ['Bicycle crunches', 'core', '10 per side', '', 'Lie on your back with your hands lightly behind your head. Bring one elbow toward the opposite knee while the other leg stretches out, then switch, like pedalling. Slow and controlled.'],
  ['Hollow body hold', 'core', '20 seconds', '', 'Lie on your back and press your lower back into the floor. Lift your shoulders and straight legs a little off the floor with your arms by your ears, and hold. If your back lifts off the floor, bend your knees.'],
  ['Bodyweight squats', 'legs', '15 reps', '', 'Feet shoulder-width apart. Sit your hips back and down with your chest up and knees over your toes, then stand tall.'],
  ['Jumping squats', 'legs', '10 reps', '', 'Do a squat, then jump up and land softly with bent knees, going straight into the next squat.'],
  ['Sumo squats', 'legs', '15 reps', '', 'Feet wide, toes turned out. Squat down with your chest up and knees pushing out, then stand.'],
  ['Sissy squats', 'legs', '6 reps', '', 'Hold a wall or post. Rise on your toes, lean back and let your knees slide forward as you lower, keeping a straight line from knees to shoulders. Go only as low as feels comfortable for your knees.'],
  ['Archer squats', 'legs', '5 per side', '', 'Stand with a very wide stance. Shift your weight over one leg and squat on it while the other leg stays straight out to the side. Stand and switch sides.'],
  ['Pistol squats', 'legs', '3 per leg', '', 'Stand on one leg with the other leg straight out in front. Sit down on the standing leg as low as you can, then stand. Very hard, so try the assisted version first.'],
  ['Assisted pistol squats', 'legs', '5 per leg', '', 'A pistol squat with help: hold a door frame, pole or rings with your hands, or sit down onto a chair and stand back up. Use only as much help as you need.'],
  ['Lunges', 'legs', '10 per leg', '', 'Step forward and lower until both knees are bent about 90 degrees, then push back to standing and switch legs. Keep your chest up.'],
  ['Bulgarian split squats', 'legs', '8 per leg', '', 'Put your back foot on a chair or bench behind you. Lower your back knee toward the floor with most of your weight on the front leg, then stand. Do all reps on one leg, then switch.'],
  ['Kettlebell swings', 'wt', '15 reps', 'wt', 'Hold a kettlebell with both hands. Push your hips back and let the bell swing between your legs, then snap your hips forward so the bell floats to chest height. The power comes from your hips, not your arms.'],
  ['Single-arm kettlebell swings', 'wt', '10 per arm', 'wt', 'A kettlebell swing with one hand. Keep your shoulders square and your free arm out for balance. Swap hands after the reps.'],
  ['Goblet squats', 'wt', '10 reps', 'wt', 'Hold a kettlebell or dumbbell against your chest. Squat down with your chest up and elbows inside your knees, then stand.'],
  ['Kettlebell clean and press', 'wt', '5 per arm', 'wt', 'Swing the bell up so it rests at your shoulder (the clean), then press it straight overhead and lower it back to your shoulder and down. Keep your wrist straight.'],
  ['Dumbbell thrusters', 'wt', '8 reps', 'wt', 'Hold dumbbells at your shoulders. Squat down, then stand up fast and use that drive to press the dumbbells overhead. Lower them to your shoulders and repeat.'],
  ['Renegade rows', 'wt', '6 per arm', 'wt', 'Plank position with your hands on two dumbbells and your feet wide. Pull one dumbbell to your hip while keeping your hips still, lower it, then switch arms.'],
  ['Dumbbell push press', 'wt', '8 reps', 'wt', 'Hold dumbbells at your shoulders. Bend your knees slightly, drive up with your legs and press the dumbbells overhead. Lower back to your shoulders.'],
  ['Single-arm dumbbell rows', 'wt', '10 per arm', 'wt', 'One hand and one knee on a bench or chair, back flat. Pull the dumbbell toward your hip, squeeze, and lower. Finish one side, then switch.'],
  ['Dumbbell Romanian deadlifts', 'wt', '12 reps', 'wt', 'Hold dumbbells in front of your thighs. With soft knees, push your hips back and slide the weights down your legs with a flat back, then stand tall.'],
  ['Goblet reverse lunges', 'wt', '8 per leg', 'wt', 'Hold a weight at your chest. Step one leg back and lower, then push through your front foot to return. Switch legs.']
];
const exByName = n => EXLIB.find(e => e[0] === n);

const MAMA_MESSAGES = [
  'Well done, mama. Healing takes time, and every gentle session counts.',
  'You showed up for yourself today. Rest, drink water, and be kind to your body.'
];
const MESSAGES = [
  'Showing up is the hard part, and you did it. Strength is built one minute at a time.',
  'Done. Rest well, drink some water, and come back stronger.',
  'Every session counts. Keep it simple and keep showing up.'
];

/* ---------- Pure timing logic (testable) ---------- */
function calc(elapsedMs, rounds) {
  const totalMs = rounds * 4 * 60000;
  if (elapsedMs >= totalMs) return { finished: true, totalMs, progress: 1 };
  const e = Math.max(0, elapsedMs);
  const minuteIndex = Math.floor(e / 60000);
  return {
    finished: false, totalMs, minuteIndex,
    exIndex: minuteIndex % 4,
    round: Math.floor(minuteIndex / 4) + 1,
    minute: minuteIndex + 1,
    secondsLeft: 60 - Math.floor((e % 60000) / 1000),
    progress: e / totalMs
  };
}
if (typeof module !== 'undefined') { module.exports = { calc, PROGRAMMES, ADVANCED, resolveAdvanced }; }

/* ---------- Swahili / English ---------- */
const SW = {
"ONE MINUTE. ONE MOVE.": "DAKIKA MOJA. ZOEZI MOJA.",
"points": "pointi",
"WOMEN": "WANAWAKE",
"MEN": "WANAUME",
"MAMA: gentle workouts after birth": "MAMA: mazoezi laini baada ya kujifungua",
"Low-impact moves to rebuild your core, pelvic floor and strength. Start only when your doctor or midwife says you are ready. Timing differs for everyone: often around 6 weeks after a vaginal birth, and often 8 to 12 weeks or more after a C-section.": "Mazoezi mepesi yasiyo na mshtuko ya kurudisha nguvu ya tumbo, misuli ya nyonga (pelvic floor) na mwili. Anza tu pale daktari au mkunga wako anaposema uko tayari. Muda hutofautiana kwa kila mtu: mara nyingi karibu wiki 6 baada ya kujifungua kawaida, na mara nyingi wiki 8 hadi 12 au zaidi baada ya upasuaji (C-section).",
"There are no crunches, sit-ups or planks here. Go slowly. Stop and speak to your doctor if you feel pain, pulling at a C-section scar, heaviness or pressure in your pelvis, leaking, a bulge along your belly, dizziness, or if bleeding increases or returns.": "Hapa hakuna crunches, sit-ups wala planks. Fanya polepole. Acha na zungumza na daktari wako ukihisi maumivu, kuvuta kwenye kovu la upasuaji, uzito au shinikizo kwenye nyonga, kuvuja mkojo, uvimbe kando ya tumbo, kizunguzungu, au damu ikiongezeka au kurudi.",
"These moves strengthen your core. They cannot remove belly fat from one spot. Walking, good food, sleep and time all help too.": "Mazoezi haya huimarisha misuli ya tumbo. Hayawezi kuondoa mafuta ya sehemu moja ya tumbo. Kutembea, chakula bora, usingizi na muda pia husaidia.",
"Level": "Kiwango",
"Equipment": "Vifaa",
"Choose a workout": "Chagua mazoezi",
"Choose a length": "Chagua muda",
"Rep level": "Kiwango cha marudio",
"Warm up first (3–5 min)": "Pata joto kwanza (dakika 3–5)",
"March in place, shoulder circles, hip circles and a few easy squats. Stop if you feel sharp pain, dizziness or chest pain.": "Tembea mahali pamoja, zungusha mabega, zungusha nyonga na fanya squats chache nyepesi. Acha ukihisi maumivu makali, kizunguzungu au maumivu ya kifua.",
"START 3-MIN WARM-UP": "ANZA JOTO LA DAKIKA 3",
"Today's four moves": "Zoezi nne za leo",
"Tap a move to see how to do it.": "Gusa zoezi kuona jinsi ya kulifanya.",
"START WORKOUT": "ANZA MAZOEZI",
"This week": "Wiki hii",
"Progress": "Maendeleo",
"Minutes trained per week": "Dakika za mazoezi kila wiki",
"Your workout days": "Siku zako za mazoezi",
"Reminder time": "Muda wa ukumbusho",
"SET REMINDER": "WEKA UKUMBUSHO",
"History": "Historia",
"SHARE WITH A FRIEND": "MSHIRIKISHE RAFIKI",
"DOWNLOAD WORKOUT GUIDE": "PAKUA MWONGOZO WA MAZOEZI",
"Your workout history is saved on this phone.": "Historia ya mazoezi yako imehifadhiwa kwenye simu hii.",
"SIGN UP": "JISAJILI",
"LOG IN": "INGIA",
"Name or nickname": "Jina au jina la utani",
"WhatsApp number": "Namba ya WhatsApp",
"4-digit PIN": "PIN ya tarakimu 4",
"I am": "Mimi ni",
"MALE": "MWANAUME",
"FEMALE": "MWANAMKE",
"My nickname and points may be shown on the leaderboard to other people of my gender.": "Jina langu la utani na pointi zangu vinaweza kuonyeshwa kwenye ubao wa washindi kwa watu wengine wa jinsia yangu.",
"Your number is never saved as a number, only as a secure code. It is used so you can log in again from any phone. Remember your PIN: there is no reset by SMS, but the admin can reset it for you.": "Namba yako haihifadhiwi kama namba, bali kama msimbo salama. Hutumika ili uweze kuingia tena kutoka simu yoyote. Kumbuka PIN yako: hakuna kuiweka upya kwa SMS, lakini msimamizi anaweza kukuwekea upya.",
"seconds left this minute": "sekunde zilizobaki dakika hii",
"Go slowly. Stop if you feel pain, heaviness, leaking or more bleeding.": "Fanya polepole. Acha ukihisi maumivu, uzito, kuvuja mkojo au damu zaidi.",
"Do the reps now, then rest until the timer hits 0.": "Fanya marudio sasa, kisha pumzika hadi saa ifike 0.",
"RESET": "ANZA UPYA",
"seconds left on this move": "sekunde zilizobaki kwenye zoezi hili",
"SKIP MOVE": "RUKA ZOEZI",
"STOP": "ACHA",
"WARM-UP DONE": "JOTO LIMEKAMILIKA",
"Your body is ready. Start your workout when you are.": "Mwili wako uko tayari. Anza mazoezi ukiwa tayari.",
"BACK": "RUDI",
"WORKOUT COMPLETED": "MAZOEZI YAMEKAMILIKA",
"Programme": "Programu",
"Workout": "Zoezi",
"Total time": "Muda wote",
"START ANOTHER WORKOUT": "ANZA MAZOEZI MENGINE",
"BACK TO HOME": "RUDI NYUMBANI",
"Before you start": "Kabla ya kuanza",
"These workouts are gentle, but your body is still healing. Please confirm:": "Mazoezi haya ni laini, lakini mwili wako bado unapona. Tafadhali thibitisha:",
"My doctor or midwife has said it is OK for me to exercise.": "Daktari au mkunga wangu amesema ni sawa kwangu kufanya mazoezi.",
"After a C-section, wait for your doctor's go-ahead. Stop any move that hurts.": "Baada ya upasuaji (C-section), subiri ruhusa ya daktari wako. Acha zoezi lolote linalouma.",
"CONTINUE": "ENDELEA",
"NOT YET": "SIO SASA",
"Exercise always carries some risk. Please confirm:": "Mazoezi daima yana hatari kidogo. Tafadhali thibitisha:",
"I am well enough to exercise. I will stop if I feel pain, dizziness or chest pain.": "Niko vizuri kufanya mazoezi. Nitaacha nikihisi maumivu, kizunguzungu au maumivu ya kifua.",
"Warm up first. Use bars, rings and weights only if they are stable and safe. Speak to a doctor if you have a medical condition, are pregnant, or are unsure.": "Pata joto kwanza. Tumia bar, rings na uzito tu kama ni imara na salama. Zungumza na daktari ikiwa una tatizo la kiafya, una ujauzito, au huna uhakika.",
"Your account": "Akaunti yako",
"SAVE": "HIFADHI",
"LOG OUT": "TOKA",
"DELETE ACCOUNT": "FUTA AKAUNTI",
"CLOSE": "FUNGA",
"How EMOM works": "EMOM inavyofanya kazi",
"EMOM = Every Minute On the Minute.": "EMOM = Kila Dakika Kwenye Dakika.",
"Each workout has four exercises.": "Kila mazoezi yana zoezi nne.",
"Every minute, one exercise starts. Do the reps right away.": "Kila dakika, zoezi moja linaanza. Fanya marudio mara moja.",
"Rest for whatever time is left in that minute.": "Pumzika kwa muda uliobaki katika dakika hiyo.",
"Four minutes = one round. Repeat for 3, 4 or 5 rounds.": "Dakika nne = raundi moja. Rudia raundi 3, 4 au 5.",
"New to training? Start with 12 minutes. Add rounds only when your form and recovery feel good.": "Mgeni kwenye mazoezi? Anza na dakika 12. Ongeza raundi tu pale mbinu na kupona kwako vinapokuwa vizuri.",
"GOT IT": "NIMEELEWA",
"BEGINNER": "MWANZO",
"ADVANCED": "JUU",
"Bodyweight moves. No equipment needed.": "Mazoezi ya uzito wa mwili. Hakuna vifaa vinavyohitajika.",
"For people who already train. Moves use the equipment you pick below.": "Kwa watu wanaofanya mazoezi tayari. Mazoezi hutumia vifaa utakavyochagua hapa chini.",
"PULL-UP BAR": "BAR YA KUJIVUTA",
"DIP BAR / RINGS": "BAR YA DIPS / RINGS",
"GYM": "GYM",
"Gym includes a pull-up bar, dip station and weights.": "Gym ina bar ya kujivuta, bar ya dips na uzito.",
"Tap again to remove. Moves you cannot do with this equipment use a home version.": "Gusa tena kuondoa. Mazoezi usiyoweza kufanya kwa vifaa hivi yatatumia toleo la nyumbani.",
"Nothing selected: home workout, no equipment. Tap what you have.": "Hujachagua kitu: mazoezi ya nyumbani bila vifaa. Gusa ulichonacho.",
"EASIER": "RAHISI",
"STANDARD": "KAWAIDA",
"HARDER": "NGUMU",
"About 30% fewer reps than the standard plan.": "Takriban 30% marudio machache kuliko mpango wa kawaida.",
"About 30% more reps. Move up when standard feels easy.": "Takriban 30% marudio zaidi. Panda juu kawaida inapokuwa rahisi.",
"The standard beginner reps from the guide.": "Marudio ya kawaida ya wanaoanza kutoka kwenye mwongozo.",
"Top level reached. Legend!": "Umefika kiwango cha juu. Legend!",
"day streak": "siku mfululizo",
"week streak": "wiki mfululizo",
"workouts": "mazoezi",
"minutes": "dakika",
"First workout": "Mazoezi ya kwanza",
"5 workouts": "Mazoezi 5",
"25 workouts": "Mazoezi 25",
"100 workouts": "Mazoezi 100",
"100 minutes": "Dakika 100",
"500 minutes": "Dakika 500",
"500 points": "Pointi 500",
"2000 points": "Pointi 2000",
"No workouts yet this week. Pick your workout days below.": "Bado hujafanya mazoezi wiki hii. Chagua siku zako za mazoezi hapa chini.",
"Your finished workouts will appear here.": "Mazoezi uliyokamilisha yataonekana hapa.",
"Pick your workout days below to build a weekly routine.": "Chagua siku zako za mazoezi hapa chini ili kujenga ratiba ya wiki.",
"Today's workout is done. Great work.": "Mazoezi ya leo yamekamilika. Kazi nzuri.",
"Today is a workout day. Let's go!": "Leo ni siku ya mazoezi. Twende!",
"Pick at least one workout day first.": "Chagua angalau siku moja ya mazoezi kwanza.",
"Saves a repeating event to your phone calendar for your workout days. Open the file it downloads and tap Save or Add. The reminder then rings even when the app is closed.": "Huhifadhi tukio linalojirudia kwenye kalenda ya simu yako kwa siku zako za mazoezi. Fungua faili itakayopakuliwa kisha gusa Save au Add. Ukumbusho utalia hata programu ikiwa imefungwa.",
"It's workout time. One minute. One move.": "Ni wakati wa mazoezi. Dakika moja. Zoezi moja.",
"Last minute. Finish strong.": "Dakika ya mwisho. Maliza kwa nguvu.",
"PAUSE": "SITISHA",
"RESUME": "ENDELEA",
"CREATE ACCOUNT": "FUNGUA AKAUNTI",
"PLEASE WAIT...": "SUBIRI...",
"Saving your points...": "Inahifadhi pointi zako...",
"Saved on this phone. Your points will be added when you are online.": "Imehifadhiwa kwenye simu hii. Pointi zako zitaongezwa ukiwa na mtandao.",
"Enter a valid phone number, for example 0712 345 678.": "Weka namba sahihi ya simu, kwa mfano 0712 345 678.",
"PIN must be exactly 4 digits.": "PIN lazima iwe tarakimu 4 kamili.",
"Name must be 2 to 20 characters.": "Jina liwe na herufi 2 hadi 20.",
"Choose male or female.": "Chagua mwanaume au mwanamke.",
"This number already has an account. Tap LOG IN.": "Namba hii tayari ina akaunti. Gusa INGIA.",
"Wrong number or PIN.": "Namba au PIN si sahihi.",
"Too many wrong tries. Wait 15 minutes and try again.": "Umekosea mara nyingi. Subiri dakika 15 kisha ujaribu tena.",
"No internet connection. Try again.": "Hakuna mtandao. Jaribu tena.",
"Something went wrong. Try again.": "Kuna hitilafu. Jaribu tena.",
"Please tick the box to continue.": "Tafadhali weka tiki kwenye kisanduku ili kuendelea.",
"Saved.": "Imehifadhiwa.",
"Reset this workout? Your progress will be lost.": "Anza upya mazoezi haya? Maendeleo yako yatapotea.",
"Some workouts are not synced yet and will be lost. Log out anyway?": "Baadhi ya mazoezi hayajatumwa na yatapotea. Toka hata hivyo?",
"Delete your account, points and history? This cannot be undone.": "Futa akaunti, pointi na historia yako? Hili haliwezi kurudishwa.",
"Workout complete. Well done.": "Mazoezi yamekamilika. Hongera.",
"Warm-up done. Start your workout when you are ready.": "Joto limekamilika. Anza mazoezi ukiwa tayari.",
"Voice on.": "Sauti imewashwa.",
"Halfway there.": "Nusu ya njia.",
"Try HOME EMOM: free beginner home workouts, no equipment. One minute. One move.": "Jaribu HOME EMOM: mazoezi ya nyumbani bila malipo na bila vifaa. Dakika moja. Zoezi moja.",
"🏆 LEADERBOARD": "🏆 ORODHA YA WASHINDI",
"📜 MY HISTORY": "📜 HISTORIA YANGU",
"⚙️ ADMIN PANEL": "⚙️ PANELI YA MSIMAMIZI",
"Leaderboard": "Orodha ya washindi",
"My history": "Historia yangu",
"Admin panel": "Paneli ya msimamizi",
"WEEK": "WIKI",
"MONTH": "MWEZI",
"ALL TIME": "WAKATI WOTE",
"Users": "Watumiaji",
"Recent workouts": "Mazoezi ya hivi karibuni",
"Loading...": "Inapakia...",
"No workouts here yet. Be the first!": "Bado hakuna mazoezi hapa. Kuwa wa kwanza!",
"No workouts saved in your account yet.": "Bado hakuna mazoezi yaliyohifadhiwa kwenye akaunti yako.",
"users": "watumiaji",
"trained this week": "wamefanya wiki hii",
"total workouts": "mazoezi yote",
"RESET PIN": "WEKA PIN UPYA",
"DELETE": "FUTA",
"You": "Wewe",
"Choose your opponent": "Chagua mpinzani wako",
"Same gender only. Once you both agree, you are locked in until Sunday night.": "Jinsia moja tu. Mkikubaliana, mnafungwa hadi Jumapili usiku.",
"Ongoing 1v1s": "1v1 zinazoendelea",
"Pair a 1v1": "Panga 1v1",
"PAIR THEM": "WAPANGE"
};
const REPS_SW = [[' per side', ' kila upande'], [' per leg', ' kila mguu'], [' per arm', ' kila mkono'], [' reps', ' marudio'], [' seconds', ' sekunde'], [' breaths', ' pumzi']];
const WARM_SW = [['Tembea mahali pamoja', 'Inua magoti na peleka mikono.'], ['Zungusha mabega', 'Mizunguko mikubwa polepole. Badilisha upande katikati.'],
  ['Zungusha nyonga', 'Mikono kiunoni, chora duara kubwa.'], ['Squats nyepesi', 'Shuka kidogo tu. Songa taratibu.'],
  ['Peleka mikono na geuza mwili', 'Peleka mikono kwenye kifua na geuza mwili taratibu.'], ['Tembea na pumua', 'Punguza kasi na pumua kwa kina.']];
const WARM_MAMA_SW = [['Tembea taratibu', 'Inua magoti chini kidogo na peleka mikono.'], ['Zungusha mabega', 'Mizunguko mikubwa polepole. Badilisha upande katikati.'],
  ['Zungusha nyonga', 'Mikono kiunoni, mizunguko ya polepole.'], ['Fungua kifua', 'Panua mikono pande zote unapovuta pumzi, kisha jikumbatie.'],
  ['Squats polepole hadi kiti', 'Shuka kidogo. Toa pumzi unaposimama.'], ['Tembea na pumua', 'Punguza kasi na pumua kwa kina.']];
const MESSAGES_SW = ['Kuanza ndio sehemu ngumu, nawe umefanya hivyo. Nguvu hujengwa dakika moja baada ya nyingine.', 'Umemaliza. Pumzika vizuri, kunywa maji, na urudi na nguvu zaidi.', 'Kila mazoezi yana maana. Weka rahisi na endelea kujitokeza.'];
const MAMA_MESSAGES_SW = ['Hongera, mama. Kupona huchukua muda, na kila mazoezi laini yana maana.', 'Umejitokeza kwa ajili yako leo. Pumzika, kunywa maji, na uwe mpole kwa mwili wako.'];
const DYN_IDS = ['pauseBtn', 'auGo', 'remNote', 'buildDialog', 'duMine', 'duInv', 'duPick', 'duLive', 'duMsg', 'admDuList', 'admDuMsg', 'admDuA', 'admDuB'];

/* ---------- Browser app ---------- */
if (typeof document !== 'undefined') (function () {
  const $ = id => document.getElementById(id);
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };

  const sel = Object.assign({ prog: 'women', work: 0, mins: 12, sound: true, voice: true, level: 'normal', days: [], remTime: '18:00', lastRem: '', mamaOk: false, safeOk: false, stage: 'beginner', equip: [], lang: ((navigator.language || '').toLowerCase().indexOf('sw') === 0 ? 'sw' : 'en') }, store.get('emom_sel', {}));
  if (!Array.isArray(sel.days)) sel.days = [];
  if (!Array.isArray(sel.equip)) sel.equip = [];
  if (!['beginner', 'advanced'].includes(sel.stage)) sel.stage = 'beginner';
  // custom ("Build your own") workouts are saved on this phone, up to 5 per programme
  const customs = () => ((store.get('emom_custom', {}) || {})[sel.prog]) || [];
  const saveCustoms = arr => { const all = store.get('emom_custom', {}) || {}; all[sel.prog] = arr; store.set('emom_custom', all); };
  const toWorkout = c => { const ex = c.picks.map(exByName).filter(Boolean).map(e => [e[0], e[2], e[4]]);
    return { id: c.id, name: c.name, desc: ex.length + (ex.length === 1 ? ' move' : ' moves') + ' · 20 min', custom: true, ex: ex }; };
  const list = () => (sel.prog !== 'mama' && sel.stage === 'advanced') ? resolveAdvanced(sel.prog, sel.equip).concat(customs().map(toWorkout).filter(w => w.ex.length)) : PROGRAMMES[sel.prog].workouts;
  if (!['easy', 'normal', 'hard'].includes(sel.level)) sel.level = 'normal';
  if (!PROGRAMMES[sel.prog] || !DURATIONS.includes(sel.mins) || !list()[sel.work]) { sel.prog = 'women'; sel.work = 0; sel.mins = 12; }
  const saveSel = () => store.set('emom_sel', sel);
  if (!['en', 'sw'].includes(sel.lang)) sel.lang = 'en';
  const L = (en, sw) => sel.lang === 'sw' ? sw : en;
  const T = s => (sel.lang === 'sw' && SW[s]) || s;
  const trReps = t => sel.lang === 'sw' ? REPS_SW.reduce((x, p) => x.replace(p[0], p[1]), t) : t;
  function translateDom() {
    const sw = sel.lang === 'sw';
    document.documentElement.lang = sw ? 'sw' : 'en';
    document.querySelectorAll('body *').forEach(el => {
      if (el.children.length || el.tagName === 'SCRIPT' || DYN_IDS.includes(el.id)) return;
      if (!el.dataset.en) { const t = el.textContent.trim(); if (!SW[t]) return; el.dataset.en = t; }
      el.textContent = sw ? SW[el.dataset.en] : el.dataset.en;
    });
    $('langBtn').textContent = sw ? 'SW' : 'EN';
  }
  const REM_DEFAULT = 'Saves a repeating event to your phone calendar for your workout days. Open the file it downloads and tap Save or Add. The reminder then rings even when the app is closed.';
  let remMsg = null;
  const showRem = () => { $('remNote').textContent = remMsg ? remMsg() : T(REM_DEFAULT); };

  /* ---------- account (Supabase) ---------- */
  const SB_URL = 'https://nstoeokbqtnikupjvjxd.supabase.co', SB_KEY = 'sb_publishable_DCxl_579nAOECRBXyFvp4g_BoXmyngF';
  async function rpc(fn, args) {
    let res;
    try {
      res = await fetch(SB_URL + '/rest/v1/rpc/' + fn, { method: 'POST', headers: { apikey: SB_KEY, 'Content-Type': 'application/json' }, body: JSON.stringify(args || {}) });
    } catch (e) { throw new Error('network'); }
    let data = null;
    try { data = await res.json(); } catch (e) {}
    if (!res.ok) throw new Error((data && data.message) || 'server');
    return data;
  }
  const ERR = { bad_phone: 'Enter a valid phone number, for example 0712 345 678.', bad_pin: 'PIN must be exactly 4 digits.', bad_name: 'Name must be 2 to 20 characters.',
    bad_gender: 'Choose male or female.', phone_taken: 'This number already has an account. Tap LOG IN.', bad_login: 'Wrong number or PIN.',
    locked: 'Too many wrong tries. Wait 15 minutes and try again.', network: 'No internet connection. Try again.' };
  const errText = m => T(ERR[m] || 'Something went wrong. Try again.');

  const auth = Object.assign({ token: '', profile: null }, store.get('emom_auth', {}));
  const saveAuth = () => store.set('emom_auth', auth);
  const isAdmin = () => !!(auth.profile && auth.profile.is_admin);
  const allowedProgs = () => !auth.profile || isAdmin() ? ['women', 'men', 'mama'] : auth.profile.gender === 'male' ? ['men'] : ['women', 'mama'];
  function fixProg() { const ap = allowedProgs(); if (!ap.includes(sel.prog)) { sel.prog = ap[0]; sel.work = 0; saveSel(); } }

  const LEVELS = [[0, 'Starter'], [100, 'Mover'], [300, 'Regular'], [700, 'Strong'], [1500, 'Beast'], [3000, 'Legend']];
  const levelOf = pts => { let i = 0; LEVELS.forEach((l, k) => { if (pts >= l[0]) i = k; }); return i; };
  const BADGES = [['First workout', p => p.workouts >= 1], ['5 workouts', p => p.workouts >= 5], ['25 workouts', p => p.workouts >= 25], ['100 workouts', p => p.workouts >= 100],
    ['100 minutes', p => p.minutes >= 100], ['500 minutes', p => p.minutes >= 500], ['500 points', p => p.points >= 500], ['2000 points', p => p.points >= 2000]];
  function applyProfile(p) { auth.profile = p; saveAuth(); fixProg(); renderProfile(); }
  function renderProfile() {
    const p = auth.profile; $('profileCard').hidden = !p; if (!p) return;
    const li = levelOf(p.points), cur = LEVELS[li], nxt = LEVELS[li + 1];
    $('pName').textContent = p.name + (p.is_admin ? ' (admin)' : '');
    $('pLevel').textContent = L('Level ', 'Kiwango ') + (li + 1) + ' · ' + cur[1];
    $('pPts').textContent = p.points;
    $('pBar').style.width = (nxt ? Math.min(100, (p.points - cur[0]) / (nxt[0] - cur[0]) * 100) : 100).toFixed(1) + '%';
    $('pNext').textContent = nxt ? (nxt[0] - p.points) + L(' points to ', ' pointi hadi ') + nxt[1] : T('Top level reached. Legend!');
    const box = (n, l) => '<div class="stat"><b>' + n + '</b><span>' + l + '</span></div>';
    $('pStats').innerHTML = box(p.day_streak, T('day streak')) + box(p.week_streak, T('week streak')) + box(p.workouts, T('workouts'));
    $('badges').innerHTML = BADGES.map(b => '<span class="badge' + (b[1](p) ? ' on' : '') + '">' + T(b[0]) + '</span>').join('');
  }

  /* workouts wait in this queue until the server confirms them (works offline) */
  const queue = { get: () => store.get('emom_queue', []), set: v => store.set('emom_queue', v) };
  let flushing = false;
  function onBadSession() { auth.token = ''; auth.profile = null; saveAuth(); show('auth'); renderAuth(); }
  async function flushQueue() {
    if (!auth.token || flushing) return null;
    flushing = true; let last = null;
    try {
      const q = queue.get();
      while (q.length) {
        let r;
        try { r = await rpc('log_workout', Object.assign({ p_token: auth.token }, q[0])); }
        catch (e) {
          if (['bad_mins', 'bad_mode', 'bad_prog', 'bad_stage'].includes(e.message)) { q.shift(); queue.set(q); continue; }
          throw e;
        }
        last = r; q.shift(); queue.set(q); applyProfile(r.profile);
      }
    } catch (e) { if (e.message === 'bad_session') onBadSession(); }
    flushing = false;
    return last;
  }
  const pointsText = r => { const t = r.points + r.bonus; return '+' + t + L(' points', ' pointi') + (r.bonus ? L(' (includes +' + r.bonus + ' streak bonus)', ' (pamoja na +' + r.bonus + ' bonasi ya mfululizo)') : '') + (t === 0 ? L('. Daily limit reached: the first 2 workouts each day earn points.', '. Kikomo cha siku kimefikiwa: mazoezi 2 ya kwanza kila siku hupata pointi.') : ''); };
  async function refreshMe() {
    if (!auth.token) return;
    try { applyProfile(await rpc('me', { p_token: auth.token })); renderSetup(); duelBadge(); }
    catch (e) { if (e.message === 'bad_session') onBadSession(); }
  }
  async function logout() {
    const t = auth.token; auth.token = ''; auth.profile = null; saveAuth(); queue.set([]);
    try { if (t) await rpc('logout', { p_token: t }); } catch (e) {}
    show('auth'); renderAuth();
  }

  /* ----- leaderboard, history, admin panel ----- */
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const MEDAL = ['🥇', '🥈', '🥉'];
  const lbState = { period: 'week', gender: null };
  const nice = d => { try { return parseDay(String(d).slice(0, 10)).toLocaleDateString(); } catch (e) { return d || ''; } };
  function apiFail(e, el) { if (e.message === 'bad_session') { onBadSession(); return; } el.textContent = e.message === 'network' ? T(ERR.network) : T('Something went wrong. Try again.'); }
  async function openBoard() {
    if (!auth.token) return;
    show('board');
    const g = lbState.gender || (auth.profile && auth.profile.gender) || 'female';
    $('lbPeriod').querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.p === lbState.period));
    $('lbGender').hidden = !isAdmin();
    $('lbGender').querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.g === g));
    $('lbList').innerHTML = ''; $('lbMe').hidden = true; $('lbMsg').textContent = T('Loading...');
    try {
      const r = await rpc('lb_board', { p_token: auth.token, p_period: lbState.period, p_gender: isAdmin() ? g : null });
      $('lbMsg').textContent = r.rows.length ? '' : T('No workouts here yet. Be the first!');
      $('lbList').innerHTML = r.rows.map(x => '<li class="lbrow' + (x.me ? ' me' : '') + '"><i>' + (MEDAL[x.pos - 1] || x.pos) + '</i><b>' + esc(x.name) + '</b><span>' + x.points + L(' pts', ' pointi') + ' · ' + x.workouts + '</span></li>').join('');
      if (r.me && !r.rows.some(x => x.me)) { $('lbMe').hidden = false; $('lbMe').innerHTML = '<b>' + L('Your rank: #', 'Nafasi yako: #') + r.me.pos + '</b> · ' + r.me.points + L(' pts', ' pointi'); }
    } catch (e) { apiFail(e, $('lbMsg')); }
  }
  async function openHistory() {
    if (!auth.token) return;
    show('hxView'); $('hxList').innerHTML = ''; $('hxSum').textContent = ''; $('hxMsg').textContent = T('Loading...');
    try {
      const rows = await rpc('my_history', { p_token: auth.token, p_limit: 100 });
      $('hxMsg').textContent = rows.length ? '' : T('No workouts saved in your account yet.');
      const pts = rows.reduce((n, x) => n + (x.points || 0), 0), mins = rows.reduce((n, x) => n + (x.mins || 0), 0);
      $('hxSum').textContent = rows.length ? rows.length + ' ' + T('workouts') + ' · ' + mins + ' ' + T('minutes') + ' · ' + pts + L(' points', ' pointi') : '';
      $('hxList').innerHTML = rows.map(x => '<li><b>' + esc(x.workout_id) + ' ' + esc(x.workout_name) + '</b><span>' + x.mins + L(' min · +', ' dak · +') + x.points + ' · ' + nice(x.day) + '</span></li>').join('');
    } catch (e) { apiFail(e, $('hxMsg')); }
  }
  async function openAdmin() {
    if (!isAdmin()) return;
    show('admView'); $('admUsers').innerHTML = ''; $('admRecent').innerHTML = ''; $('admMsg').textContent = T('Loading...');
    try {
      const r = await rpc('lb_admin', { p_token: auth.token });
      $('admMsg').textContent = '';
      const box = (n, l) => '<div class="stat"><b>' + n + '</b><span>' + l + '</span></div>';
      $('admStats').innerHTML = box(r.users.length, T('users')) + box(r.users.filter(u => u.week_workouts > 0).length, T('trained this week')) + box(r.users.reduce((n, u) => n + u.workouts, 0), T('total workouts'));
      $('admUsers').innerHTML = r.users.map(u => '<li class="adm-row"><div><b>' + esc(u.name) + '</b><small>' + (u.gender === 'male' ? '♂' : '♀') + (u.is_admin ? ' ★' : '') + ' · ' + nice(u.joined) + '</small><small>' + u.workouts + ' ' + T('workouts') + ' · ' + u.points + L(' pts', ' pointi') + (u.last_day ? ' · ' + nice(u.last_day) : '') + '</small></div><div class="adm-btns"><button class="ghost" data-pin="' + esc(u.id) + '" data-n="' + esc(u.name) + '">' + T('RESET PIN') + '</button>' + (u.is_admin ? '' : '<button class="ghost" data-del="' + esc(u.id) + '" data-n="' + esc(u.name) + '">' + T('DELETE') + '</button>') + '</div></li>').join('');
      $('admRecent').innerHTML = r.recent.map(x => '<li><b>' + esc(x.name) + '</b><span>' + esc(x.workout) + ' · ' + x.mins + L(' min', ' dak') + ' · ' + nice(x.day) + '</span></li>').join('');
      $('admUsers').querySelectorAll('[data-pin]').forEach(b => b.onclick = () => admPin(b.dataset.pin, b.dataset.n));
      $('admUsers').querySelectorAll('[data-del]').forEach(b => b.onclick = () => admDel(b.dataset.del, b.dataset.n));
      loadAdmDuels();
    } catch (e) { apiFail(e, $('admMsg')); }
  }
  async function admPin(id, name) {
    const pin = prompt(L('New 4-digit PIN for ', 'PIN mpya ya tarakimu 4 ya ') + name + ':');
    if (pin === null) return;
    if (!/^\d{4}$/.test(pin)) { alert(T(ERR.bad_pin)); return; }
    try { await rpc('admin_reset_pin', { p_token: auth.token, p_user: id, p_new_pin: pin }); alert(L('PIN changed.', 'PIN imebadilishwa.')); }
    catch (e) { alert(T('Something went wrong. Try again.')); }
  }
  async function admDel(id, name) {
    if (!confirm(L('Delete ' + name + ' and all their data? This cannot be undone.', 'Futa ' + name + ' na data zake zote? Hili haliwezi kurudishwa.'))) return;
    try { await rpc('admin_delete_user', { p_token: auth.token, p_user: id }); openAdmin(); }
    catch (e) { alert(T('Something went wrong. Try again.')); }
  }
  $('lbBtn').onclick = openBoard; $('hxBtn').onclick = openHistory; $('admBtn').onclick = openAdmin;
  $('lbPeriod').querySelectorAll('button').forEach(b => b.onclick = () => { lbState.period = b.dataset.p; openBoard(); });
  $('lbGender').querySelectorAll('button').forEach(b => b.onclick = () => { lbState.gender = b.dataset.g; openBoard(); });
  document.querySelectorAll('.backBtn').forEach(b => b.onclick = () => { show('setup'); renderSetup(); refreshMe(); });


  /* ----- 1v1 duels (needs v13.sql in Supabase) ----- */
  const duErr = m => m === 'network' ? T(ERR.network) : ({
    busy_you: L('You are already in a 1v1 until it ends.', 'Tayari uko kwenye 1v1 hadi iishe.'),
    busy_them: L('That person is already in a 1v1.', 'Mtu huyo yupo kwenye 1v1 tayari.'),
    bad_opponent: L('You can only challenge someone of your gender.', 'Unaweza kumpa changamoto mtu wa jinsia yako tu.'),
    not_found: L('This invite is no longer available.', 'Ombi hili halipo tena.')
  }[m] || (T('Something went wrong. Try again.') + ' [' + m + ']'));
  async function duelBadge() {
    if (!auth.token) return;
    try { const m = await rpc('duel_mine', { p_token: auth.token }); $('duBtn').textContent = '⚔️ 1V1' + (m.incoming.length ? ' (' + m.incoming.length + ')' : ''); } catch (e) {}
  }
  // who is ahead: points, then workouts, then minutes
  const duLead = d => { const x = [d.a.points, d.a.workouts, d.a.mins], y = [d.b.points, d.b.workouts, d.b.mins]; for (let i = 0; i < 3; i++) if (x[i] !== y[i]) return x[i] > y[i] ? 'a' : 'b'; return null; };
  const duBar = d => '<div class="dbar"><i style="flex:' + Math.max(1, d.a.points) + '"></i><i class="o" style="flex:' + Math.max(1, d.b.points) + '"></i></div>';
  const duTime = d => d.finished ? '' : d.starts_in ? L('Starts in ' + d.starts_in + ' day(s)', 'Inaanza baada ya siku ' + d.starts_in) : d.days_left + L(' day(s) left. Ends Sunday night.', ' zimebaki. Inaisha Jumapili usiku.');
  function duPublic(d) {   // card for any 1v1 in the public list
    const ld = duLead(d), cls = k => ld === k ? ' lead' : '';
    return '<li class="duel-card' + (d.me ? ' me' : '') + '"><div class="r"><span class="nm' + cls('a') + '">' + esc(d.a.name) + '</span><span class="pt' + cls('a') + '">' + d.a.points + '</span></div>' + duBar(d) +
      '<div class="r"><span class="nm' + cls('b') + '">' + esc(d.b.name) + '</span><span class="pt' + cls('b') + '">' + d.b.points + '</span></div></li>';
  }
  function duMineCard(d) {   // big card for my own 1v1 (active or finished)
    const me = d.me === 'b' ? d.b : d.a, op = d.me === 'b' ? d.a : d.b, k = d.me, ok = k === 'a' ? 'b' : 'a', ld = duLead(d);
    let msg = '';
    if (d.finished) {
      if (d.winner === 'tie') msg = L('It is a tie!', 'Sare!');
      else {
        const won = d.winner === k, dp = Math.abs(me.points - op.points), dw = Math.abs(me.workouts - op.workouts);
        const how = dp ? dp + L(' points', ' pointi') : dw ? L('more workouts', 'workouts nyingi zaidi') : L('more minutes', 'dakika nyingi zaidi');
        msg = won ? L('You won by ' + how, 'Umeshinda kwa ' + how) : esc(op.name) + L(' won by ', ' ameshinda kwa ') + how;
      }
    } else msg = !ld ? L('You are level.', 'Mko sawa.') : ld === k ? L('You are ahead by ' + (me.points - op.points) + ' points', 'Unaongoza kwa pointi ' + (me.points - op.points)) : esc(op.name) + L(' is ahead by ', ' anaongoza kwa pointi ') + (op.points - me.points);
    return '<div class="card duel-me"><div class="who">' + (d.finished ? L('1V1 FINISHED', '1V1 IMEISHA') : L('THIS WEEK', 'WIKI HII') + ' · ' + duTime(d)) + (d.by_admin ? ' · ' + L('set by admin', 'imepangwa na admin') : '') + '</div>' +
      '<div class="r" style="margin-top:10px;align-items:flex-end"><div><span class="who">' + L('YOU', 'WEWE') + '</span><b class="bigpts">' + me.points + '</b></div><div style="text-align:right"><span class="who">' + esc(op.name).toUpperCase() + '</span><b class="bigpts o">' + op.points + '</b></div></div>' +
      (k === 'a' ? duBar(d) : duBar({ a: d.b, b: d.a })) + '<div class="duel-win">' + msg + '</div>' +
      '<div class="stat2"><span>Workouts</span><b>' + me.workouts + ' · ' + op.workouts + '</b></div><div class="stat2"><span>' + L('Minutes', 'Dakika') + '</span><b>' + me.mins + ' · ' + op.mins + '</b></div>' +
      '<p class="muted small" style="margin:8px 0 0">' + L('Tie-break: more workouts, then more minutes.', 'Pointi zikilingana: workouts nyingi, kisha dakika nyingi.') + '</p>' +
      (d.finished ? '<button class="big primary" data-act="rematch" data-id="' + op.id + '" data-n="' + esc(op.name) + '">' + L('REMATCH NEXT WEEK', 'RUDIANA WIKI IJAYO') + '</button>' : '') + '</div>';
  }
  async function openDuel() {
    if (!auth.token) return;
    show('duelView');
    ['duMine', 'duInv', 'duPick', 'duLive'].forEach(i => $(i).innerHTML = ''); $('duPickBox').hidden = true; $('duMsg').textContent = T('Loading...');
    try {
      const [m, live] = await Promise.all([rpc('duel_mine', { p_token: auth.token }), rpc('duel_live', { p_token: auth.token })]);
      const free = !m.busy && !m.outgoing;
      const users = free ? await rpc('duel_users', { p_token: auth.token, p_pick: true }) : [];
      $('duMsg').textContent = '';
      $('duBtn').textContent = '⚔️ 1V1' + (m.incoming.length ? ' (' + m.incoming.length + ')' : '');
      $('duMine').innerHTML = m.active ? duMineCard(m.active) : (m.last ? duMineCard(m.last) : '') +
        (m.outgoing ? '<div class="duel-row"><div><b>' + L('Waiting for ', 'Inasubiri jibu la ') + esc(m.outgoing.to_name) + '</b><small>' + L('The invite stays open for 3 days.', 'Ombi linakaa siku 3.') + '</small></div><button class="gh" data-act="cancel" data-id="' + m.outgoing.id + '">' + L('CANCEL', 'FUTA') + '</button></div>' : '');
      $('duInv').innerHTML = m.busy ? '' : m.incoming.map(i => '<div class="duel-row"><div><b>' + esc(i.from_name) + '</b><small>' + L('challenged you to a 1v1', 'amekupa changamoto ya 1v1') + '</small></div><button data-act="accept" data-id="' + i.id + '" data-n="' + esc(i.from_name) + '">' + L('ACCEPT', 'KUBALI') + '</button><button class="gh" data-act="decline" data-id="' + i.id + '">' + L('NO', 'HAPANA') + '</button></div>').join('');
      $('duPickBox').hidden = !free;
      $('duPick').innerHTML = users.length ? users.map(u => '<li class="duel-row"><div><b>' + esc(u.name) + '</b><small>' + (u.busy ? L('In a 1v1 until Sunday', 'Yupo kwenye 1v1 hadi Jumapili') : L('This week: ', 'Wiki hii: ') + u.week_points + L(' pts', ' pointi')) + '</small></div><button data-act="challenge" data-id="' + u.id + '" data-n="' + esc(u.name) + '"' + (u.busy ? ' disabled' : '') + '>' + L('CHALLENGE', 'SHINDANA') + '</button></li>').join('') : '<li class="muted small">' + L('No one to challenge yet.', 'Hakuna wa kushindana naye bado.') + '</li>';
      $('duLive').innerHTML = live.length ? live.map(duPublic).join('') : '<li class="muted small">' + L('No 1v1 is running right now.', 'Hakuna 1v1 inayoendelea sasa.') + '</li>';
    } catch (e) { $('duMsg').textContent = duErr(e.message); if (e.message === 'bad_session') onBadSession(); }
  }
  async function duAct(act, id, name) {
    try {
      if (act === 'challenge' || act === 'rematch') {
        if (!confirm(L('Challenge ' + name + '? If they accept, you are both locked in until Sunday night.', 'Mpe ' + name + ' changamoto? Akikubali, mnafungwa hadi Jumapili usiku.'))) return;
        await rpc('duel_challenge', { p_token: auth.token, p_opp: id });
      } else if (act === 'accept') {
        if (!confirm(L('Accept the 1v1 with ' + name + '? You are both locked in until Sunday night.', 'Kubali 1v1 na ' + name + '? Mnafungwa hadi Jumapili usiku.'))) return;
        await rpc('duel_respond', { p_token: auth.token, p_duel: +id, p_accept: true });
      } else if (act === 'decline') await rpc('duel_respond', { p_token: auth.token, p_duel: +id, p_accept: false });
      else if (act === 'cancel') await rpc('duel_cancel', { p_token: auth.token, p_duel: +id });
      openDuel();
    } catch (e) { alert(duErr(e.message)); if (e.message === 'bad_session') onBadSession(); else openDuel(); }
  }
  $('duelView').onclick = ev => { const b = ev.target.closest('[data-act]'); if (b && !b.disabled) duAct(b.dataset.act, b.dataset.id, b.dataset.n); };
  $('duBtn').onclick = openDuel;

  /* admin: pair two people into a 1v1 */
  let admDuUsers = [];
  function fillAdmB() {
    const a = admDuUsers.find(u => u.id === $('admDuA').value);
    $('admDuB').innerHTML = admDuUsers.filter(u => a && u.id !== a.id && u.gender === a.gender).map(u => '<option value="' + u.id + '"' + (u.busy ? ' disabled' : '') + '>' + esc(u.name) + (u.busy ? ' (1v1)' : '') + '</option>').join('');
  }
  async function loadAdmDuels() {
    try {
      const [users, live] = await Promise.all([rpc('duel_users', { p_token: auth.token }), rpc('duel_live', { p_token: auth.token })]);
      admDuUsers = users;
      $('admDuA').innerHTML = users.map(u => '<option value="' + u.id + '"' + (u.busy ? ' disabled' : '') + '>' + esc(u.name) + ' ' + (u.gender === 'male' ? '♂' : '♀') + (u.busy ? ' (1v1)' : '') + '</option>').join('');
      const first = users.find(u => !u.busy); if (first) $('admDuA').value = first.id;
      fillAdmB();
      $('admDuList').innerHTML = live.map(d => '<li class="adm-row"><div><b>' + esc(d.a.name) + ' vs ' + esc(d.b.name) + '</b><small>' + d.a.points + ' · ' + d.b.points + ' · ' + duTime(d) + '</small></div><div class="adm-btns"><button data-dc="' + d.id + '">' + L('CANCEL 1V1', 'FUTA 1V1') + '</button></div></li>').join('');
      $('admDuList').querySelectorAll('[data-dc]').forEach(b => b.onclick = async () => {
        if (!confirm(L('Cancel this 1v1?', 'Futa 1v1 hii?'))) return;
        try { await rpc('admin_duel_cancel', { p_token: auth.token, p_duel: +b.dataset.dc }); loadAdmDuels(); } catch (e) { alert(duErr(e.message)); }
      });
    } catch (e) { $('admDuMsg').textContent = duErr(e.message); }
  }
  $('admDuA').onchange = fillAdmB;
  $('admDuGo').onclick = async () => {
    const x = $('admDuA').value, y = $('admDuB').value;
    if (!x || !y) { $('admDuMsg').textContent = L('Pick two people of the same gender.', 'Chagua watu wawili wa jinsia moja.'); return; }
    try { await rpc('admin_duel_pair', { p_token: auth.token, p_a: x, p_b: y }); $('admDuMsg').textContent = L('Paired. Their 1v1 runs until Sunday night.', 'Wamepangwa. 1v1 yao inaisha Jumapili usiku.'); loadAdmDuels(); }
    catch (e) { $('admDuMsg').textContent = duErr(e.message); }
  };


  /* ----- Build your own (Advanced): up to 4 moves, repeated to fill 20 minutes ----- */
  let build = { editId: null, name: '', picks: [], cat: 'push', open: '' };
  const catName = c => { const x = EXCAT.find(k => k[0] === c); return sel.lang === 'sw' ? x[2] : x[1]; };
  function openBuilder(id) {
    const c = id ? customs().find(x => x.id === id) : null;
    build = { editId: c ? c.id : null, name: c ? c.name : '', picks: c ? c.picks.slice() : [], cat: 'push', open: '' };
    renderBuilder(); $('buildDialog').showModal();
  }
  function renderBuilder() {
    const b = build, n = b.picks.length, h = [];
    h.push('<h2>' + L('Build your workout', 'Tengeneza mazoezi yako') + '</h2>');
    h.push('<label class="lbl" for="buName">' + L('Name (optional)', 'Jina (si lazima)') + '</label><input id="buName" class="plain" maxlength="20" value="' + esc(b.name) + '" placeholder="' + L('My workout', 'Mazoezi yangu') + '">');
    h.push('<p class="lbl">' + L('Your moves (' + n + ' of 4)', 'Mazoezi yako (' + n + ' kati ya 4)') + '</p>');
    h.push(n ? '<ol class="bu-sel">' + b.picks.map((p, i) => { const e = exByName(p); return '<li><b>' + esc(e[0]) + '</b><span>' + esc(trReps(e[2])) + '</span><button data-bu="rm" data-i="' + i + '" aria-label="Remove">✕</button></li>'; }).join('') + '</ol>' +
      '<p class="muted small">' + (n === 1 ? L('The same move every minute for 20 minutes.', 'Zoezi lilelile kila dakika kwa dakika 20.') : L('Your ' + n + ' moves repeat in order, one per minute, for 20 minutes.', 'Mazoezi yako ' + n + ' yanajirudia kwa mpangilio, moja kila dakika, kwa dakika 20.')) + '</p>'
      : '<p class="muted small">' + L('Pick 1 to 4 moves from the list below.', 'Chagua mazoezi 1 hadi 4 kutoka orodha hapa chini.') + '</p>');
    h.push('<div class="seg five" id="buCats">' + EXCAT.map(c => '<button data-bu="cat" data-c="' + c[0] + '" class="' + (c[0] === b.cat ? 'on' : '') + '">' + catName(c[0]) + '</button>').join('') + '</div>');
    EXLIB.filter(e => e[1] === b.cat).forEach(e => {
      const added = b.picks.includes(e[0]), full = n >= 4;
      const tag = e[3] === 'bar' ? L('needs a bar', 'inahitaji bar') : e[3] === 'wt' ? L('needs a weight', 'inahitaji uzito') : L('no equipment', 'bila vifaa');
      h.push('<div class="bu-row"><div><b>' + esc(e[0]) + '</b><small>' + esc(trReps(e[2])) + ' · ' + tag + '</small></div>' +
        '<button class="bu-i" data-bu="info" data-n="' + esc(e[0]) + '" aria-label="How to">?</button>' +
        '<button class="bu-add" data-bu="add" data-n="' + esc(e[0]) + '"' + (added || full ? ' disabled' : '') + '>' + (added ? L('ADDED', 'IMEONGEZWA') : L('ADD', 'ONGEZA')) + '</button></div>');
      if (b.open === e[0]) h.push('<p class="bu-how">' + esc(e[4]) + '</p>');
    });
    h.push('<button class="big primary" data-bu="save"' + (n ? '' : ' disabled') + '>' + L('SAVE AND USE', 'HIFADHI NA TUMIA') + '</button>');
    h.push('<button class="big ghost" data-bu="cancel">' + L('CANCEL', 'GHAIRI') + '</button>');
    const d = $('buildDialog'), top = d.scrollTop; d.innerHTML = h.join(''); d.scrollTop = top;
  }
  function saveBuild() {
    const b = build; if (!b.picks.length) return;
    const nm = (b.name || '').replace(/[<>&"'`]/g, '').trim().slice(0, 20) || L('My workout', 'Mazoezi yangu');
    let arr = customs(), id = b.editId;
    if (id) arr = arr.map(x => x.id === id ? { id: id, name: nm, picks: b.picks } : x);
    else { const used = new Set(arr.map(x => x.id)); let k = 1; while (used.has('C' + k)) k++; id = 'C' + k; arr = arr.concat([{ id: id, name: nm, picks: b.picks }]); }
    saveCustoms(arr); sel.work = Math.max(0, list().findIndex(w => w.id === id)); sel.mins = 20; saveSel();
    $('buildDialog').close(); renderSetup();
  }
  $('buildDialog').oninput = ev => { if (ev.target.id === 'buName') build.name = ev.target.value; };
  $('buildDialog').onclick = ev => {
    const t = ev.target.closest('[data-bu]'); if (!t || t.disabled) return;
    const k = t.dataset.bu;
    if (k === 'cat') { build.cat = t.dataset.c; build.open = ''; renderBuilder(); }
    else if (k === 'info') { build.open = build.open === t.dataset.n ? '' : t.dataset.n; renderBuilder(); }
    else if (k === 'add') { if (build.picks.length < 4 && !build.picks.includes(t.dataset.n)) build.picks.push(t.dataset.n); renderBuilder(); }
    else if (k === 'rm') { build.picks.splice(+t.dataset.i, 1); renderBuilder(); }
    else if (k === 'save') saveBuild();
    else if (k === 'cancel') $('buildDialog').close();
  };
  $('cuEdit').onclick = () => { const w = list()[sel.work]; if (w && w.custom) openBuilder(w.id); };
  $('cuDel').onclick = () => {
    const w = list()[sel.work]; if (!w || !w.custom) return;
    if (!confirm(L('Delete "' + w.name + '"?', 'Futa "' + w.name + '"?'))) return;
    saveCustoms(customs().filter(x => x.id !== w.id)); sel.work = 0; saveSel(); renderSetup();
  };

  const session = { status: 'idle', acc: 0, startedAt: 0, rounds: 3, ticker: null, lastMinute: -1, prog: null, work: null, wakeLock: null, fired: {} };
  function adj(txt) {   // easier = about 30% fewer, harder = about 30% more
    const m = txt.match(/^(\d+)(.*)$/);
    if (!m || sel.level === 'normal') return txt;
    const n = +m[1], f = sel.level === 'easy' ? 0.7 : 1.3, sec = /second/.test(m[2]);
    return (sec ? Math.max(10, Math.round(n * f / 5) * 5) : Math.max(3, Math.round(n * f))) + m[2];
  }
  const durs = () => sel.prog === 'mama' ? [12, 16] : (list()[sel.work] && list()[sel.work].custom) ? [20] : DURATIONS;
  const curWorkout = () => { const w = list()[sel.work]; return Object.assign({}, w, { ex: w.ex.map(e => [e[0], trReps(adj(e[1])), e[2]]) }); };

  /* ----- setup screen ----- */
  function renderSetup() {
    document.body.dataset.prog = sel.prog;
    document.querySelector('meta[name=theme-color]').content = '#10120F';
    fixProg();
    const ap = allowedProgs();
    document.querySelectorAll('.seg [data-prog]').forEach(b => { b.hidden = !ap.includes(b.dataset.prog); b.classList.toggle('on', b.dataset.prog === sel.prog); });
    document.querySelector('.seg.prog').hidden = ap.length < 2;
    document.querySelector('.seg.prog').style.gridTemplateColumns = 'repeat(' + ap.length + ',1fr)';
    const adv = sel.prog !== 'mama' && sel.stage === 'advanced';
    $('stageBox').hidden = sel.prog === 'mama'; $('equipBox').hidden = !adv;
    $('stages').innerHTML = '';
    [['beginner', 'BEGINNER'], ['advanced', 'ADVANCED']].forEach(s => {
      const b = document.createElement('button');
      b.textContent = T(s[1]); b.className = s[0] === sel.stage ? 'on' : '';
      b.onclick = () => { sel.stage = s[0]; sel.work = 0; saveSel(); renderSetup(); };
      $('stages').appendChild(b);
    });
    $('stageNote').textContent = T(adv ? 'For people who already train. Moves use the equipment you pick below.' : 'Bodyweight moves. No equipment needed.');
    $('equip').innerHTML = '';
    EQUIP.forEach(e => {
      const on = sel.equip.includes(e[0]), b = document.createElement('button');
      b.textContent = T(e[1]); b.className = on ? 'on' : ''; b.setAttribute('aria-pressed', on);
      b.onclick = () => { sel.equip = on ? sel.equip.filter(x => x !== e[0]) : sel.equip.concat(e[0]); saveSel(); renderSetup(); };
      $('equip').appendChild(b);
    });
    $('equipNote').textContent = T(sel.equip.includes('gym') ? 'Gym includes a pull-up bar, dip station and weights.' : sel.equip.length ? 'Tap again to remove. Moves you cannot do with this equipment use a home version.' : 'Nothing selected: home workout, no equipment. Tap what you have.');
    $('workouts').innerHTML = '';
    list().forEach((w, i) => {
      const b = document.createElement('button');
      b.className = 'wk' + (i === sel.work ? ' on' : '');
      b.setAttribute('aria-pressed', i === sel.work);
      b.innerHTML = '<i class="id">' + w.id + '</i><b>' + w.name + '</b><span>' + w.desc + '</span>';
      b.onclick = () => { sel.work = i; saveSel(); renderSetup(); };
      $('workouts').appendChild(b);
    });
    if (adv) {
      const nb = document.createElement('button'), full = customs().length >= 5;
      nb.className = 'wk build';
      nb.innerHTML = '<i class="id">+</i><b>' + L('Build your own', 'Tengeneza yako') + '</b><span>' + (full ? L('You have 5 saved workouts. Delete one to add another.', 'Una mazoezi 5 yaliyohifadhiwa. Futa moja ili kuongeza.') : L('Pick up to 4 moves for a 20-minute EMOM.', 'Chagua hadi mazoezi 4 kwa EMOM ya dakika 20.')) + '</span>';
      nb.onclick = () => full ? alert(L('You can save up to 5 workouts. Delete one first.', 'Unaweza kuhifadhi mazoezi 5 tu. Futa moja kwanza.')) : openBuilder(null);
      $('workouts').appendChild(nb);
    }
    const curW = list()[sel.work]; $('customRow').hidden = !(curW && curW.custom);
    if (!durs().includes(sel.mins)) { sel.mins = durs().includes(12) ? 12 : durs()[0]; saveSel(); }
    $('durations').innerHTML = ''; $('durations').classList.toggle('three', durs().length === 3);
    $('mamaInfo').hidden = sel.prog !== 'mama';
    durs().forEach(m => {
      const b = document.createElement('button');
      b.textContent = m + L(' MIN', ' DAK');
      b.className = m === sel.mins ? 'on' : '';
      b.title = (m / 4) + ' rounds';
      b.onclick = () => { sel.mins = m; saveSel(); renderSetup(); };
      $('durations').appendChild(b);
    });
    $('levels').innerHTML = '';
    [['easy', 'EASIER'], ['normal', 'STANDARD'], ['hard', 'HARDER']].forEach(l => {
      const b = document.createElement('button');
      b.textContent = T(l[1]); b.className = l[0] === sel.level ? 'on' : '';
      b.onclick = () => { sel.level = l[0]; saveSel(); renderSetup(); };
      $('levels').appendChild(b);
    });
    $('levelNote').textContent = T(sel.level === 'easy' ? 'About 30% fewer reps than the standard plan.' : sel.level === 'hard' ? 'About 30% more reps. Move up when standard feels easy.' : 'The standard beginner reps from the guide.');
    fillList($('preview'), curWorkout(), -1, true);
    renderWeek(); renderHistory(); renderPlan(); renderStats();
    $('soundBtn').setAttribute('aria-pressed', sel.sound);
    $('soundBtn').textContent = sel.sound ? '🔔' : '🔕';
    $('voiceBtn').setAttribute('aria-pressed', sel.voice);
    $('voiceBtn').textContent = sel.voice ? '🗣️' : '🤐';
    $('navRow').hidden = !auth.token; $('admBtn').hidden = !isAdmin();
    translateDom();
  }
  const slug = n => n.toLowerCase().replace(/[^a-z]+/g, '-').replace(/^-|-$/g, '');
  const demoSrc = n => 'ex-' + slug(n) + '.svg';
  function openEx(e) {
    $('exImg').style.display = ''; $('exImg').src = demoSrc(e[0]); $('exImg').alt = 'Animated demo of ' + e[0];
    $('exName').textContent = e[0]; $('exReps').textContent = e[1]; $('exTip').textContent = e[2];
    $('exDialog').showModal();
  }
  function fillList(ol, w, cur, tips) {
    ol.innerHTML = '';
    w.ex.forEach((e, i) => {
      const li = document.createElement('li');
      if (i === cur) li.className = 'cur';
      li.innerHTML = '<b>' + e[0] + '</b><span class="r">' + e[1] + '</span>' + (tips ? '<small>' + e[2] + '</small>' : '');
      if (tips) { li.classList.add('tap'); li.setAttribute('role', 'button'); li.tabIndex = 0;
        li.insertAdjacentHTML('beforeend', '<img class="thumb" alt="" src="' + demoSrc(e[0]) + '" onerror="this.style.display=\'none\'">');
        li.onclick = () => openEx(e); li.onkeydown = ev => { if (ev.key === 'Enter') openEx(e); }; }
      ol.appendChild(li);
    });
  }

  /* ----- history & weekly tracker ----- */
  const dkey = d => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  function renderWeek() {
    const hist = store.get('emom_history', []);
    const done = new Set(hist.map(h => h.day));
    const now = new Date(); const mondayOffset = (now.getDay() + 6) % 7;
    const mon = new Date(now.getFullYear(), now.getMonth(), now.getDate() - mondayOffset);
    $('week').innerHTML = ''; let count = 0;
    ['M', 'T', 'W', 'T', 'F', 'S', 'S'].forEach((l, i) => {
      const d = new Date(mon.getFullYear(), mon.getMonth(), mon.getDate() + i);
      const hit = done.has(dkey(d)); if (hit) count++;
      const el = document.createElement('div');
      el.className = 'day' + (hit ? ' done' : '') + (i === mondayOffset ? ' today' : '') + (sel.days.includes(i) ? ' plan' : '');
      el.innerHTML = l + '<i></i>'; $('week').appendChild(el);
    });
    $('weekNote').textContent = sel.days.length ? count + L(' trained · ', ' umefanya · ') + sel.days.length + L(' planned this week.', ' ulizopanga wiki hii.') : (count === 0 ? T('No workouts yet this week. Pick your workout days below.') : count + L(count === 1 ? ' day trained this week.' : ' days trained this week.', ' siku za mazoezi wiki hii.'));
  }
  function renderHistory() {
    const hist = store.get('emom_history', []).slice(-5).reverse();
    $('history').innerHTML = hist.length ? '' : '<li><span>' + T('Your finished workouts will appear here.') + '</span></li>';
    hist.forEach(h => {
      const li = document.createElement('li');
      li.innerHTML = '<b>' + h.work + ' ' + h.workName + '</b><span>' + h.mins + L(' min · ', ' dak · ') + new Date(h.ts).toLocaleDateString() + '</span>';
      $('history').appendChild(li);
    });
  }
  function saveHistory() {
    const hist = store.get('emom_history', []);
    hist.push({ ts: Date.now(), day: dkey(new Date()), prog: session.prog, work: session.work.id, workName: session.work.name, mins: session.rounds * 4 });
    store.set('emom_history', hist.slice(-200));
  }

  /* ----- plan, progress, reminders ----- */
  const FULLS = { en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], sw: ['Jtatu', 'Jnne', 'Jtano', 'Alh', 'Ijm', 'Jmos', 'Jpili'] };
  const mondayOf = d => new Date(d.getFullYear(), d.getMonth(), d.getDate() - ((d.getDay() + 6) % 7));
  const parseDay = s => { const p = s.split('-').map(Number); return new Date(p[0], p[1] - 1, p[2]); };
  function renderPlan() {
    $('planDays').innerHTML = '';
    ['M', 'T', 'W', 'T', 'F', 'S', 'S'].forEach((l, i) => {
      const on = sel.days.includes(i), b = document.createElement('button');
      b.className = 'day' + (on ? ' on' : ''); b.setAttribute('aria-pressed', on); b.setAttribute('aria-label', FULLS[sel.lang][i]);
      b.innerHTML = l + '<i></i>';
      b.onclick = () => { sel.days = on ? sel.days.filter(d => d !== i) : sel.days.concat(i).sort(); saveSel(); renderPlan(); renderWeek(); };
      $('planDays').appendChild(b);
    });
    $('remTime').value = sel.remTime;
    const hist = store.get('emom_history', []), todayKey = dkey(new Date()), idx = (new Date().getDay() + 6) % 7;
    const doneToday = hist.some(x => x.day === todayKey);
    let msg = '';
    if (!sel.days.length) msg = T('Pick your workout days below to build a weekly routine.');
    else if (sel.days.includes(idx)) msg = T(doneToday ? "Today's workout is done. Great work." : "Today is a workout day. Let's go!");
    else { for (let k = 1; k <= 7; k++) { const j = (idx + k) % 7; if (sel.days.includes(j)) { msg = L('Rest day. Next workout: ', 'Siku ya mapumziko. Mazoezi yanayofuata: ') + FULLS[sel.lang][j] + '.'; break; } } }
    $('todayBanner').textContent = msg; $('todayBanner').hidden = !msg; showRem();
  }
  function renderStats() {
    const hist = store.get('emom_history', []);
    const mins = hist.reduce((n, x) => n + x.mins, 0);
    const weeks = new Set(hist.map(x => dkey(mondayOf(parseDay(x.day)))));
    let w = mondayOf(new Date()), streak = 0;
    if (!weeks.has(dkey(w))) w = new Date(w.getFullYear(), w.getMonth(), w.getDate() - 7);
    while (weeks.has(dkey(w))) { streak++; w = new Date(w.getFullYear(), w.getMonth(), w.getDate() - 7); }
    const box = (n, l) => '<div class="stat"><b>' + n + '</b><span>' + l + '</span></div>';
    $('stats').innerHTML = box(hist.length, T('workouts')) + box(mins, T('minutes')) + box(streak, T('week streak'));
    const cur = mondayOf(new Date()), data = [];
    for (let i = 5; i >= 0; i--) {
      const start = new Date(cur.getFullYear(), cur.getMonth(), cur.getDate() - 7 * i), end = new Date(start.getFullYear(), start.getMonth(), start.getDate() + 7);
      const m = hist.filter(x => { const d = parseDay(x.day); return d >= start && d < end; }).reduce((n, x) => n + x.mins, 0);
      data.push({ label: start.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }), m });
    }
    const max = Math.max(20, ...data.map(d => d.m));
    $('chart').innerHTML = data.map(d => '<div class="bar-col"><em>' + (d.m || '') + '</em><i class="' + (d.m ? '' : 'zero') + '" style="height:' + Math.max(3, d.m / max * 80) + '%"></i><span>' + d.label + '</span></div>').join('');
  }
  function makeIcs() {
    const p = n => String(n).padStart(2, '0'), codes = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
    const hm = sel.remTime.split(':').map(Number), now = new Date();
    let start = null;
    for (let k = 0; k < 8 && !start; k++) {
      const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + k, hm[0], hm[1]);
      if (sel.days.includes((d.getDay() + 6) % 7) && d > now) start = d;
    }
    const f = d => d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate()) + 'T' + p(d.getHours()) + p(d.getMinutes()) + '00';
    const end = new Date(start.getTime() + 30 * 60000);
    return ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//HOME EMOM//EN', 'BEGIN:VEVENT',
      'UID:home-emom-' + Date.now() + '@home-emom', 'DTSTAMP:' + new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z',
      'DTSTART:' + f(start), 'DTEND:' + f(end),
      'RRULE:FREQ=WEEKLY;BYDAY=' + sel.days.map(i => codes[i]).join(','),
      'SUMMARY:HOME EMOM workout', 'DESCRIPTION:Time for your HOME EMOM workout. One minute. One move.',
      'BEGIN:VALARM', 'ACTION:DISPLAY', 'DESCRIPTION:HOME EMOM workout', 'TRIGGER:PT0M', 'END:VALARM', 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
  }
  function setReminder() {
    if (!sel.days.length) { alert(T('Pick at least one workout day first.')); return; }
    sel.remTime = $('remTime').value || '18:00'; saveSel();
    try { if ('Notification' in window && Notification.permission === 'default') Notification.requestPermission(); } catch (e) {}
    const url = URL.createObjectURL(new Blob([makeIcs()], { type: 'text/calendar' }));
    const a = document.createElement('a'); a.href = url; a.download = 'home-emom-reminder.ics';
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 5000);
    remMsg = () => L('Reminder file downloaded. Open it and tap Save or Add to put it in your calendar. It repeats every week on ', 'Faili ya ukumbusho imepakuliwa. Ifungue kisha gusa Save au Add ili kuiweka kwenye kalenda. Inajirudia kila wiki siku za ') + sel.days.map(i => FULLS[sel.lang][i]).join(', ') + L(' at ', ' saa ') + sel.remTime + '.'; showRem();
  }
  function checkReminder() {   // only works while the app is open
    if (!sel.days.length || session.status !== 'idle') return;
    const n = new Date(), key = dkey(n);
    if (!sel.days.includes((n.getDay() + 6) % 7) || sel.lastRem === key) return;
    if (store.get('emom_history', []).some(x => x.day === key)) return;
    const hm = sel.remTime.split(':').map(Number), now = n.getHours() * 60 + n.getMinutes(), t = hm[0] * 60 + hm[1];
    if (now >= t && now < t + 10) {
      sel.lastRem = key; saveSel(); renderPlan();
      try { if ('Notification' in window && Notification.permission === 'granted') navigator.serviceWorker.ready.then(r => r.showNotification('HOME EMOM', { body: T("It's workout time. One minute. One move."), icon: 'icon-192.png' })); } catch (e) {}
    }
  }

  /* ----- notifications ----- */
  let audio = null;
  function beep(freq, dur) {
    try {
      audio = audio || new (window.AudioContext || window.webkitAudioContext)();
      if (audio.state === 'suspended') audio.resume();
      const o = audio.createOscillator(), g = audio.createGain();
      o.frequency.value = freq; o.connect(g); g.connect(audio.destination);
      g.gain.setValueAtTime(0.25, audio.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + dur);
      o.start(); o.stop(audio.currentTime + dur);
    } catch (e) {}
  }
  function speak(text) {
    if (!sel.voice || !('speechSynthesis' in window)) return;
    try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(text); u.lang = sel.lang === 'sw' ? 'sw-TZ' : 'en-US'; u.rate = 1; speechSynthesis.speak(u); } catch (e) {}
  }
  const hush = () => { try { 'speechSynthesis' in window && speechSynthesis.cancel(); } catch (e) {} };
  function notify(big) {
    if (!sel.sound) return;
    beep(big ? 520 : 880, big ? 0.7 : 0.25);
    try { navigator.vibrate && navigator.vibrate(big ? [200, 100, 200, 100, 400] : 250); } catch (e) {}
  }

  /* ----- timer ----- */
  const elapsed = () => session.acc + (session.status === 'running' ? Date.now() - session.startedAt : 0);
  function show(id) { ['setup', 'session', 'done', 'warmup', 'auth', 'board', 'hxView', 'admView', 'duelView'].forEach(v => $(v).hidden = v !== id); window.scrollTo(0, 0); }

  function start() {
    if (session.status !== 'idle' || warm.status === 'running') return;   // guard: never start twice
    stopTicker();
    Object.assign(session, { status: 'running', acc: 0, startedAt: Date.now(), rounds: sel.mins / 4, lastMinute: -1, prog: sel.prog, work: curWorkout(), mode: sel.level, stage: (sel.prog !== 'mama' && sel.stage === 'advanced') ? 'advanced' : 'beginner', equip: (sel.prog !== 'mama' && sel.stage === 'advanced') ? sel.equip.join(',') : '' });
    $('chipName').textContent = session.work.id + ' ' + session.work.name;
    $('pauseBtn').textContent = T('PAUSE');
    $('mamaWarn').hidden = session.prog !== 'mama';
    show('session'); lockScreen(); startTicker(); tick();
  }
  function startTicker() { stopTicker(); session.ticker = setInterval(tick, 250); }
  function stopTicker() { if (session.ticker) { clearInterval(session.ticker); session.ticker = null; } }
  function pauseResume() {
    if (session.status === 'running') {
      session.acc = elapsed(); session.status = 'paused'; stopTicker(); hush();
      $('pauseBtn').textContent = T('RESUME'); unlockScreen();
    } else if (session.status === 'paused') {
      session.startedAt = Date.now(); session.status = 'running';
      $('pauseBtn').textContent = T('PAUSE'); lockScreen(); startTicker(); tick();
    }
  }
  function reset() {
    stopTicker(); unlockScreen(); hush();
    Object.assign(session, { status: 'idle', acc: 0, lastMinute: -1 });
    show('setup'); renderSetup();
  }
  function tick() {
    if (session.status !== 'running') return;
    const s = calc(elapsed(), session.rounds);
    if (s.finished) return finish();
    const nEx = session.work.ex.length, ci = s.minuteIndex % nEx, ex = session.work.ex[ci], nextEx = session.work.ex[(ci + 1) % nEx];
    const last = s.minute === session.rounds * 4, f = session.fired;
    if (s.minuteIndex !== session.lastMinute) {
      session.lastMinute = s.minuteIndex; session.fired = {}; notify(false);
      $('timer').classList.remove('go'); void $('timer').offsetWidth; $('timer').classList.add('go');
      $('nowImg').style.display = ''; $('nowImg').src = demoSrc(ex[0]); $('nowImg').alt = 'Animated demo of ' + ex[0];
      $('nowName').textContent = ex[0]; $('nowReps').textContent = ex[1]; $('nowTip').textContent = ex[2];
      $('nextUp').textContent = last ? T('Last minute. Finish strong.') : L('Next up: ', 'Inayofuata: ') + nextEx[0] + ' · ' + nextEx[1];
      fillList($('liveList'), session.work, ci, false);
      $('chipRound').textContent = L('Round ', 'Raundi ') + s.round + L(' of ', ' kati ya ') + session.rounds;
      $('chipMin').textContent = L('Minute ', 'Dakika ') + s.minute + L(' of ', ' kati ya ') + session.rounds * 4;
      let say = '';
      if (s.exIndex === 0) say += L('Round ', 'Raundi ') + s.round + (s.round === session.rounds && session.rounds > 1 ? L(', final round. ', ', raundi ya mwisho. ') : '. ');
      say += L('Minute ', 'Dakika ') + s.minute + '. ' + (last ? L('Last minute. ', 'Dakika ya mwisho. ') : '') + ex[0] + ', ' + ex[1] + '.';
      speak(say);
    }
    const sl = s.secondsLeft, fr = session.fired;
    if (sl <= 30 && sl >= 27 && !fr.half) { fr.half = 1; speak(T('Halfway there.')); }
    if (sl <= 10 && sl >= 7 && !fr.ten) { fr.ten = 1; speak(last ? L('10 seconds left. Last minute, finish strong.', 'Sekunde 10 zimebaki. Dakika ya mwisho, maliza kwa nguvu.') : L('10 seconds left. Next up: ', 'Sekunde 10 zimebaki. Inayofuata: ') + nextEx[0] + '.'); }
    if (sl <= 3 && !fr['c' + sl]) { fr['c' + sl] = 1; if (sel.sound) beep(660, 0.12); }
    $('timer').textContent = sl;
    $('bar').style.width = (s.progress * 100).toFixed(1) + '%';
    const left = Math.ceil((s.totalMs - elapsed()) / 1000);
    $('barText').textContent = Math.floor(left / 60) + ':' + String(left % 60).padStart(2, '0') + L(' left in total', ' zimebaki kwa jumla');
  }
  function finish() {
    stopTicker(); unlockScreen(); session.status = 'idle'; notify(true); speak(T('Workout complete. Well done.'));
    saveHistory();
    queue.set(queue.get().concat([{ p_prog: session.prog, p_stage: session.stage, p_equip: session.equip, p_workout_id: session.work.id, p_workout_name: session.work.name, p_mins: session.rounds * 4, p_mode: session.mode }]));
    $('dPoints').textContent = T('Saving your points...');
    flushQueue().then(r => { $('dPoints').textContent = r ? pointsText(r) : T('Saved on this phone. Your points will be added when you are online.'); });
    $('dProg').textContent = L(PROGRAMMES[session.prog].label + (session.prog === 'mama' ? ' PROGRAMME' : "'S PROGRAMME"), { women: 'WANAWAKE', men: 'WANAUME', mama: 'MAMA' }[session.prog] + ' - PROGRAMU');
    $('dWork').textContent = session.work.id + ' · ' + session.work.name;
    $('dTime').textContent = session.rounds * 4 + L(' minutes', ' dakika');
    const mi = session.prog === 'mama' ? MAMA_MESSAGES : MESSAGES, mk = Math.floor(Math.random() * mi.length);
    $('dMsg').textContent = (sel.lang === 'sw' ? (session.prog === 'mama' ? MAMA_MESSAGES_SW : MESSAGES_SW) : mi)[mk];
    show('done');
  }

  /* ----- warm-up (6 moves x 30 s = 3 min) ----- */
  const WARM = [['March in place', 'Lift your knees and swing your arms.'], ['Shoulder circles', 'Big, slow circles. Switch direction halfway.'],
    ['Hip circles', 'Hands on hips, draw big circles.'], ['Easy squats', 'Small range. Move smoothly.'],
    ['Arm swings and twists', 'Swing your arms across your chest and gently twist.'], ['March and breathe', 'Slow down and breathe deeply.']];
  const WARM_MAMA = [['Gentle march', 'Lift your knees low and swing your arms.'], ['Shoulder circles', 'Big slow circles. Switch direction halfway.'],
    ['Hip circles', 'Hands on hips, slow circles.'], ['Chest opener', 'Reach your arms wide as you breathe in, then hug yourself.'],
    ['Slow squats to a chair', 'Small range. Breathe out as you stand.'], ['March and breathe', 'Slow down and breathe deeply.']];
  const warmList = () => sel.lang === 'sw' ? (sel.prog === 'mama' ? WARM_MAMA_SW : WARM_SW) : (sel.prog === 'mama' ? WARM_MAMA : WARM);
  const WSEC = 30, warm = { status: 'idle', startedAt: 0, ticker: null, last: -1, fired: {} };
  function startWarm() {
    if (session.status !== 'idle' || warm.status === 'running') return;
    try { audio = audio || new (window.AudioContext || window.webkitAudioContext)(); audio.resume(); } catch (e) {}
    Object.assign(warm, { status: 'running', startedAt: Date.now(), last: -1, fired: {} });
    $('wuLive').hidden = false; $('wuDone').hidden = true; show('warmup'); lockScreen();
    warm.ticker = setInterval(warmTick, 250); warmTick();
  }
  function warmTick() {
    if (warm.status !== 'running') return;
    const e = Date.now() - warm.startedAt, total = warmList().length * WSEC * 1000;
    if (e >= total) return warmFinish();
    const idx = Math.floor(e / (WSEC * 1000)), left = WSEC - Math.floor((e % (WSEC * 1000)) / 1000);
    if (idx !== warm.last) {
      warm.last = idx; warm.fired = {}; notify(false);
      $('wuName').textContent = warmList()[idx][0]; $('wuTip').textContent = warmList()[idx][1];
      $('wuStep').textContent = L('Move ', 'Zoezi ') + (idx + 1) + L(' of ', ' kati ya ') + warmList().length; speak(warmList()[idx][0] + '.');
    }
    if (left <= 3 && !warm.fired['c' + left]) { warm.fired['c' + left] = 1; if (sel.sound) beep(660, 0.12); }
    $('wuTimer').textContent = left;
    const rem = Math.ceil((total - e) / 1000);
    $('wuTotal').textContent = Math.floor(rem / 60) + ':' + String(rem % 60).padStart(2, '0') + L(' left', ' zimebaki');
    $('wuBar').style.width = (e / total * 100).toFixed(1) + '%';
  }
  function stopWarm() { if (warm.ticker) clearInterval(warm.ticker); warm.ticker = null; warm.status = 'idle'; unlockScreen(); hush(); }
  function warmFinish() { stopWarm(); notify(true); speak(T('Warm-up done. Start your workout when you are ready.')); $('wuLive').hidden = true; $('wuDone').hidden = false; }
  function skipWarm() { const e = Date.now() - warm.startedAt, next = (Math.floor(e / (WSEC * 1000)) + 1) * WSEC * 1000; warm.startedAt -= (next - e); warmTick(); }
  function share() {
    const url = location.href.split('#')[0].split('?')[0].replace(/index\.html$/, ''), text = T('Try HOME EMOM: free beginner home workouts, no equipment. One minute. One move.');
    if (navigator.share) navigator.share({ title: 'HOME EMOM', text: text, url: url }).catch(() => {});
    else window.open('https://wa.me/?text=' + encodeURIComponent(text + ' ' + url), '_blank');
  }

  /* keep screen on while running (where supported) */
  async function lockScreen() { try { if ('wakeLock' in navigator && !session.wakeLock) { session.wakeLock = await navigator.wakeLock.request('screen'); session.wakeLock.addEventListener('release', () => session.wakeLock = null); } } catch (e) {} }
  function unlockScreen() { try { session.wakeLock && session.wakeLock.release(); } catch (e) {} session.wakeLock = null; }
  document.addEventListener('visibilitychange', () => { if (!document.hidden && session.status === 'running') { lockScreen(); tick(); } });

  /* ----- wiring ----- */
  document.querySelectorAll('.seg [data-prog]').forEach(b => b.onclick = () => { sel.prog = b.dataset.prog; sel.work = 0; saveSel(); renderSetup(); });
  let pending = null;
  const gate = fn => {
    if (sel.prog === 'mama' && !sel.mamaOk) { pending = fn; $('mamaCheck').checked = false; $('mamaGo').disabled = true; $('mamaDialog').showModal(); }
    else if (sel.prog !== 'mama' && !sel.safeOk) { pending = fn; $('safeCheck').checked = false; $('safeGo').disabled = true; $('safeDialog').showModal(); }
    else fn();
  };
  $('mamaCheck').onchange = () => { $('mamaGo').disabled = !$('mamaCheck').checked; };
  $('mamaGo').onclick = () => { sel.mamaOk = true; saveSel(); $('mamaDialog').close(); const f = pending; pending = null; if (f) f(); };
  $('mamaCancel').onclick = () => { pending = null; $('mamaDialog').close(); };
  $('safeCheck').onchange = () => { $('safeGo').disabled = !$('safeCheck').checked; };
  $('safeGo').onclick = () => { sel.safeOk = true; saveSel(); $('safeDialog').close(); const f = pending; pending = null; if (f) f(); };
  $('safeCancel').onclick = () => { pending = null; $('safeDialog').close(); };
  $('startBtn').onclick = () => gate(() => { try { audio = audio || new (window.AudioContext || window.webkitAudioContext)(); audio.resume(); } catch (e) {} start(); });
  $('pauseBtn').onclick = pauseResume;
  $('resetBtn').onclick = () => { if (confirm(T('Reset this workout? Your progress will be lost.'))) reset(); };
  $('againBtn').onclick = () => { show('setup'); renderSetup(); };
  $('homeBtn').onclick = () => { show('setup'); renderSetup(); refreshMe(); };
  $('langBtn').onclick = () => { sel.lang = sel.lang === 'sw' ? 'en' : 'sw'; saveSel(); renderSetup(); renderProfile(); renderAuth(); translateDom(); };
  $('soundBtn').onclick = () => { sel.sound = !sel.sound; saveSel(); renderSetup(); };
  $('voiceBtn').onclick = () => { sel.voice = !sel.voice; saveSel(); renderSetup(); if (sel.voice) speak(T('Voice on.')); else hush(); };
  $('remBtn').onclick = setReminder;
  $('remTime').onchange = () => { sel.remTime = $('remTime').value || '18:00'; saveSel(); };
  setInterval(checkReminder, 30000); checkReminder();
  $('warmBtn').onclick = () => gate(startWarm);
  $('wuSkip').onclick = skipWarm;
  $('wuStop').onclick = () => { stopWarm(); show('setup'); renderSetup(); };
  $('wuBack').onclick = () => { show('setup'); renderSetup(); };
  $('wuStart').onclick = start;
  $('shareBtn').onclick = share; $('shareBtn2').onclick = share;
  document.addEventListener('visibilitychange', () => { if (!document.hidden && warm.status === 'running') { lockScreen(); warmTick(); } });
  $('exClose').onclick = () => $('exDialog').close();
  $('helpBtn').onclick = () => $('onboard').showModal();
  $('onboardOk').onclick = () => { $('onboard').close(); store.set('emom_seen', true); };

  /* ----- account screens ----- */
  let authMode = 'signup', authGender = '', acGender = '';
  const setMsg = t => { $('auMsg').textContent = T(t || ''); };
  function renderAuth() {
    const su = authMode === 'signup';
    document.querySelectorAll('#authTabs button').forEach(b => b.classList.toggle('on', b.dataset.mode === authMode));
    document.querySelectorAll('#auGender button').forEach(b => b.classList.toggle('on', b.dataset.g === authGender));
    $('signupOnly').hidden = !su; $('signupOnly2').hidden = !su;
    $('auGo').textContent = T(su ? 'CREATE ACCOUNT' : 'LOG IN');
    setMsg('');
  }
  document.querySelectorAll('#authTabs button').forEach(b => b.onclick = () => { authMode = b.dataset.mode; renderAuth(); });
  document.querySelectorAll('#auGender button').forEach(b => b.onclick = () => { authGender = b.dataset.g; renderAuth(); });
  $('auGo').onclick = async () => {
    const su = authMode === 'signup', phone = $('auPhone').value.trim(), pin = $('auPin').value.trim(), name = $('auName').value.trim();
    if (su && (name.length < 2 || name.length > 20)) return setMsg(ERR.bad_name);
    if (phone.replace(/\D/g, '').length < 9) return setMsg(ERR.bad_phone);
    if (!/^\d{4}$/.test(pin)) return setMsg(ERR.bad_pin);
    if (su && !authGender) return setMsg(ERR.bad_gender);
    if (su && !$('auConsent').checked) return setMsg('Please tick the box to continue.');
    $('auGo').disabled = true; $('auGo').textContent = T('PLEASE WAIT...');
    try {
      const r = su ? await rpc('register', { p_name: name, p_phone: phone, p_pin: pin, p_gender: authGender, p_lang: sel.lang }) : await rpc('login', { p_phone: phone, p_pin: pin });
      if (r.error) throw new Error(r.error);
      auth.token = r.token; applyProfile(r.profile);
      $('auPin').value = ''; $('auPhone').value = '';
      show('setup'); renderSetup(); flushQueue();
    } catch (e) { setMsg(errText(e.message)); }
    $('auGo').disabled = false;
    const msg = $('auMsg').textContent; renderAuth(); setMsg(msg);
  };
  function renderAcct() { document.querySelectorAll('#acGender button').forEach(b => b.classList.toggle('on', b.dataset.g === acGender)); }
  document.querySelectorAll('#acGender button').forEach(b => b.onclick = () => { acGender = b.dataset.g; renderAcct(); });
  $('acctBtn').onclick = () => { const p = auth.profile; if (!p) return; $('acName').value = p.name; acGender = p.gender; $('acMsg').textContent = ''; renderAcct(); $('acctDialog').showModal(); };
  $('acClose').onclick = () => $('acctDialog').close();
  $('acSave').onclick = async () => {
    const name = $('acName').value.trim();
    if (name.length < 2 || name.length > 20) { $('acMsg').textContent = T(ERR.bad_name); return; }
    try {
      applyProfile(await rpc('update_profile', { p_token: auth.token, p_name: name, p_gender: acGender, p_lang: sel.lang }));
      renderSetup(); $('acMsg').textContent = T('Saved.');
    } catch (e) { if (e.message === 'bad_session') { $('acctDialog').close(); onBadSession(); } else $('acMsg').textContent = errText(e.message); }
  };
  $('acLogout').onclick = async () => {
    await flushQueue();
    if (queue.get().length && !confirm(T('Some workouts are not synced yet and will be lost. Log out anyway?'))) return;
    $('acctDialog').close(); logout();
  };
  $('acDelete').onclick = async () => {
    if (!confirm(T('Delete your account, points and history? This cannot be undone.'))) return;
    try { await rpc('delete_my_account', { p_token: auth.token }); $('acctDialog').close(); queue.set([]); auth.token = ''; auth.profile = null; saveAuth(); show('auth'); renderAuth(); }
    catch (e) { $('acMsg').textContent = errText(e.message); }
  };
  window.addEventListener('online', flushQueue);


  renderSetup(); renderProfile();
  if (!auth.token) { show('auth'); renderAuth(); } else { refreshMe(); flushQueue(); }
  if (!store.get('emom_seen', false)) $('onboard').showModal();
  if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('service-worker.js').catch(() => {}));
  // when a new version takes over, reload once (only if no workout is running)
  if ('serviceWorker' in navigator) { let had = !!navigator.serviceWorker.controller, did = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => { if (!had) { had = true; return; } if (!did && session.status === 'idle' && warm.status === 'idle') { did = true; location.reload(); } }); }
})();
