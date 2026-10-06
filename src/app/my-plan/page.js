"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getAllWorkouts } from "../../lib/api";
import { usePlan } from "../../context/PlanContext";
import PlanItem from "../../components/PlanItem";
import toast from "react-hot-toast";
import { ChevronDown } from "lucide-react";

export default function MyPlanPage() {
  // Common box theke Plan ar Saved er id list nilam
  const {
    planIds,
    savedIds,
    doneIds,
    markAsDone,
    removeFromPlan,
    removeFromSaved,
  } = usePlan();

  // API theke ana workout list, loading ar error
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Kon tab khola ache ki? --> plan ba saved
  const [activeTab, setActiveTab] = useState("plan");
  // Kon niyome shajabo duration, calories ba rating
  const [sortBy, setSortBy] = useState("duration");

  // Page khulle ekbar API theke sob workout anbo
  useEffect(() => {
    async function loadData() {
      try {
        const data = await getAllWorkouts();
        setWorkouts(data);
      } catch (error) {
        console.log(error);
        setError("Workout load kora jayni. Page reload kore dekho.");
      }
      setLoading(false);
    }

    loadData();
  }, []);

  // Plan e thaka workout gulo (stats er jonno lagbe)
  const planWorkouts = workouts.filter((workout) =>
    planIds.includes(String(workout.id)),
  );

  // Saved e thaka workout gulo
  const savedWorkouts = workouts.filter((workout) =>
    savedIds.includes(String(workout.id)),
  );

  // Je tab khola, tar list ta dekhabo
  const visibleWorkouts = activeTab === "plan" ? planWorkouts : savedWorkouts;

  // List ta shajiye nilam. Age copy banai, jate asol list na bodlay
  const sortedWorkouts = [...visibleWorkouts];

  if (sortBy === "duration") {
    sortedWorkouts.sort((a, b) => a.duration - b.duration);
  } else if (sortBy === "calories") {
    sortedWorkouts.sort((a, b) => a.caloriesBurned - b.caloriesBurned);
  } else if (sortBy === "rating") {
    sortedWorkouts.sort((a, b) => b.rating - a.rating);
  }

  // Mark as Done e chap dile
  function handleDone(id) {
    const result = markAsDone(id);

    if (result === "done") {
      toast.success("Marked as done");
    }
  }

  // X e chap dile kon tab e achi sheta dekhe
  function handleRemove(id) {
    if (activeTab === "plan") {
      removeFromPlan(id);
      toast.success("Removed from today's plan");
    } else {
      removeFromSaved(id);
      toast.success("Removed from saved");
    }
  }


  // Plan er mot minute ar calorie jog kora
  let totalMinutes = 0;
  let totalCalories = 0;

  for (const workout of planWorkouts) {
    totalMinutes = totalMinutes + workout.duration;
    totalCalories = totalCalories + workout.caloriesBurned;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-8">
      <h1 className="font-oswald text-4xl font-bold uppercase">MY PLAN</h1>
      <p className="mt-1 text-gray-400">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* 3 ta stat card */}
      <div className="mt-8 grid grid-cols-3 divide-x divide-[#23262e] rounded-2xl border border-[#23262e] bg-[#13151a] py-6">
        <div className="px-4 sm:px-8">
          <p className="text-sm text-gray-400">Exercises</p>
          <p className="font-oswald mt-1 text-3xl font-bold text-[#ccff00] sm:text-5xl">
            {planWorkouts.length}
          </p>
        </div>

        <div className="px-4 sm:px-8">
          <p className="text-sm text-gray-400">Minutes</p>
          <p className="font-oswald mt-1 text-3xl font-bold sm:text-5xl">
            {totalMinutes}
          </p>
        </div>

        <div className="px-4 sm:px-8">
          <p className="text-sm text-gray-400">Calories</p>
          <p className="font-oswald mt-1 text-3xl font-bold sm:text-5xl">
            {totalCalories}
          </p>
        </div>
      </div>

      {/* Tab duto (bame) ar Sort By (dane) */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex rounded-lg border border-[#23262e] bg-[#13151a] p-1">
          <button
            onClick={() => setActiveTab("plan")}
            className={`rounded-md px-4 py-2 text-sm ${
              activeTab === "plan"
                ? "bg-[#1b1e25] font-semibold text-white"
                : "text-gray-400"
            }`}
          >
            Today&apos;s Plan
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`rounded-md px-4 py-2 text-sm ${
              activeTab === "saved"
                ? "bg-[#1b1e25] font-semibold text-white"
                : "text-gray-400"
            }`}
          >
            Saved
          </button>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <label htmlFor="sort">Sort By</label>
          <div className="relative">
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none rounded-lg border border-[#23262e] bg-[#13151a] py-2 pl-3 pr-9 text-white"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>

      {/* Loading cholar shomoy */}
      {loading && (
        <div className="flex flex-col items-center gap-3 py-20">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#23262e] border-t-[#ccff00]" />
          <p className="text-sm text-gray-400">Loading workouts…</p>
        </div>
      )}

      {/* Error hole */}
      {error && <p className="py-10 text-center text-red-400">{error}</p>}

      {/* List faka hole Empty state */}
      {!loading && !error && visibleWorkouts.length === 0 && (
        <div className="mt-6 rounded-2xl border border-dashed border-[#23262e] px-4 py-20 text-center">
          <h2 className="font-oswald text-2xl font-bold uppercase">
            NOTHING HERE YET
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Browse the library and add a lift to get today moving.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-full bg-[#ccff00] px-6 py-2.5 text-sm font-bold text-black hover:opacity-90"
          >
            Go to workouts
          </Link>
        </div>
      )}

      {/* Workout thakle card gulo dekhabo */}
      {!loading && !error && visibleWorkouts.length > 0 && (
        <div className="mt-6 space-y-3">
          {sortedWorkouts.map((workout) => (
            <PlanItem
              key={workout.id}
              workout={workout}
              showDone={activeTab === "plan"}
              isDone={doneIds.includes(String(workout.id))}
              onDone={() => handleDone(workout.id)}
              onRemove={() => handleRemove(workout.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
