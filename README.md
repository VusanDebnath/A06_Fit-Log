# 💪 FitLog

FitLog is a dark, no-nonsense gym companion. Browse a library of lifts, lock your favourites into today's plan, save others for later, and watch the day's minutes and calories add up.

🔗 **Live Site:** https://the-fit-log-sable.vercel.app/

## ✨ Key Features

1. **Workout Library** – 12 lifts loaded from an API and shown in a responsive 3x4 grid with images, muscle-group tags, equipment, duration, calories and rating.
2. **Workout Details** – a two-column page with a large image, key specs table, step-by-step instructions and quick action buttons.
3. **Today's Plan and Saved** – add a lift to today's plan (maximum five) or save it for later, with live navbar counters and toast notifications.
4. **My Plan Dashboard** – live Exercises, Minutes and Calories stats, tabs for Today's Plan and Saved, and a friendly empty state.
5. **Mark as Done, Remove and Sort** – finish or remove lifts from the plan and sort the list by duration, calories or rating.
6. **Persistent Data** – plan, saved and done lists are kept in `localStorage`, so they survive a page reload.
7. **Responsive Design and 404 Page** – works on mobile, tablet and desktop, with loading animations and a custom 404 page.

## 🛠️ Technologies Used

- Next.js (App Router)
- React
- Tailwind CSS
- lucide-react (icons)
- react-hot-toast (notifications)
- Vercel (deployment)

## 🚀 Getting Started

```bash
git clone https://github.com/VusanDebnath/A06_Fit-Log.git
cd A06_Fit-Log
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
src/
├── app/          pages (home, workout details, my-plan, 404)
├── components/   Navbar, Footer, Hero, WorkoutCard, PlanItem
├── context/      PlanContext (plan, saved and done state)
└── lib/          API helper functions
```
