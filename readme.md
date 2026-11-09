# HOME EMOM
Free beginner home workout app. ONE MINUTE. ONE MOVE.
Plain HTML/CSS/JS. No backend, no accounts, no dependencies.

## Files
- index.html – page structure
- style.css – design (colours are at the top: --accent, --bg, --card)
- app.js – workouts (top of file), timer and history
- manifest.json, service-worker.js – installable + offline
- icons/ – app icons; guide/home-emom-guide.pdf – the PDF guide
- _headers – Netlify settings (keeps updates fresh)

## Deploy on Netlify (free)
1. Unzip home-emom.zip. You should see index.html directly inside the folder.
2. Go to https://app.netlify.com/drop and sign up/log in (free).
3. Drag the unzipped home-emom FOLDER onto the drop area.
4. Netlify gives you a URL like https://random-name.netlify.app. Open it.
5. Optional: Site configuration > Change site name to get https://home-emom.netlify.app. Share that link.

## Test on Android
1. Open the URL in Chrome. Let it load fully once (this caches the app).
2. Start a 12-minute workout, pause, resume, switch tabs, lock the phone, come back. The timer stays correct.
3. Turn on airplane mode, close the tab, reopen the link: the app should still load.
4. Tap DOWNLOAD WORKOUT GUIDE to check the PDF.

## Install on Android
Chrome menu (three dots) > Install app (or Add to Home screen). Launch from the home screen icon.

## iPhone limits
- Install via Safari only: Share > Add to Home Screen.
- Offline works after first load, but iOS can clear stored data if the app is unused for weeks.
- Vibration is not supported on iPhone; the beep still works if the phone is not on silent.
- Screen lock can pause web audio; the timer stays accurate and catches up when you unlock. Keep the screen on during workouts (the screen-keep-awake feature works on newer iOS).

## Updating the app
Edit files, then change VERSION in service-worker.js (e.g. home-emom-v2) and re-upload, so phones get the new version.
Change reps: edit the PROGRAMMES list at the top of app.js.

## v2 additions
Voice announcements (rounds, minutes, exercises, halfway, 10 seconds left, 3-2-1 beeps), weekly workout days, progress chart, and calendar reminders (.ics). Service worker VERSION is now home-emom-v2.

## v3 additions
3-minute guided warm-up, EASIER/STANDARD/HARDER rep levels (about 30% fewer/more; standard = original guide reps), and a share button. Service worker VERSION is now home-emom-v3.

## v4 additions
Animated exercise demos (assets/exercises/*.svg, one per exercise, named after the exercise). They show on the timer screen, as thumbnails in the move list, and full size when you tap a move. Service worker VERSION is now home-emom-v4. If you add a new exercise, add a matching SVG and list it in service-worker.js.

## v5 additions
Third programme: MAMA (P1-P4), gentle post-birth workouts for vaginal and C-section recovery, with a doctor-clearance check before the first workout, 12/16 minute options only, and a gentler warm-up. Edit the `mama` list at the top of app.js to change it. Service worker VERSION is now home-emom-v5.

## v6a additions
BEGINNER / ADVANCED level picker (MAMA stays beginner-only). ADVANCED workouts (MA1-MA4 from the original notebook, WA1-WA4 new for women) use a slot system: each workout has 4 slots, and the equipment you pick (PULL-UP BAR, DIP BAR / RINGS, GYM) swaps the move inside a slot; home with no equipment always works. Edit the ADVANCED list at the top of app.js. A general safety check shows once before the first workout. New exercises have no animated demo yet: the image hides itself until a matching SVG is added to assets/exercises and listed in service-worker.js. Service worker VERSION is now home-emom-v6.

## v6b additions
Accounts through Supabase (SB_URL and SB_KEY at the top of the browser part of app.js; the database is set up with home-emom-supabase-setup.txt). SIGN UP / LOG IN with name, WhatsApp number, 4-digit PIN and gender. Men see only the MEN programme, women see WOMEN and MAMA, the admin sees all. Points, levels, badges and streaks come from the server; finished workouts wait in a local queue (emom_queue) until they are saved, so offline workouts still count later. Account dialog: change name or gender, log out, delete account. History and the weekly chart are still stored on the device only (leaderboard and synced history come in v6c). Service worker VERSION is now home-emom-v7.

## v9 additions
BACK TO HOME button on the finish screen, and Swahili/English switch (EN/SW button in the top bar). Exercise names and tips are still English. Service worker VERSION is now home-emom-v9.

## v10 additions
Leaderboard (week/month/all time, by gender), My history (synced to account), Admin panel (users, reset PIN, delete, recent workouts). Needs the SQL from v10.sql run once in Supabase (functions lb_board, my_history, lb_admin). Service worker VERSION is now home-emom-v10.

## v11
Share link now works on any address (needed for GitHub Pages subfolder URLs). Added .nojekyll. Service worker VERSION is now home-emom-v12. All files are now flat in one folder (easier to upload from a phone).

## v13: 1v1
Two people of the same gender compete on points from Monday to Sunday. People pick their opponent (they accept or decline), or the admin pairs them in the admin panel. While in a 1v1 neither person can join another until Sunday night. Every ongoing 1v1 and its live points is visible to everyone. Winner: more points, then more workouts, then more minutes, otherwise a tie. A 1v1 that starts midweek counts points from the day it starts; one accepted on Sunday starts Monday. Run v13.sql once in Supabase (SQL Editor). Service worker VERSION is now home-emom-v14 (v14 also makes updates install fresh files on phones).
