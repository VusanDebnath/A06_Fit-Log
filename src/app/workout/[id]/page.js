"use client";

import { Bookmark, CalendarPlus } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getWorkoutById } from "../../../lib/api";

export default function WorkoutDetails() {
  // URL theke id ta ber korlam! Jemon-> /workout/3 hole id = "3"
  const params = useParams();
  const id = params.id;

  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // id peye gele API theke oi workout ta anbo
  useEffect(() => {
    async function loadWorkout() {
      try {
        const data = await getWorkoutById(id);
        setWorkout(data);
      } catch (error) {
        console.log(error);
        setError("Workout paoa jayni.");
      }
      setLoading(false);
    }

    loadWorkout();
  }, [id]);

  // Loading cholar shomoy
  if (loading) {
    return (
      <div className="flex flex-col items-center gap-3 py-32">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#23262e] border-t-[#ccff00]" />
        <p className="text-sm text-gray-400">Loading workout…</p>
      </div>
    );
  }

  // Error hole ba workout na pele
  if (error || !workout) {
    return (
      <div className="py-32 text-center">
        <p className="text-red-400">{error || "Workout Not Found!!"}</p>
        <Link
          href="/"
          className="mt-4 inline-block rounded-md bg-[#ccff00] px-5 py-2 text-sm font-bold text-black"
        >
          Back to workouts
        </Link>
      </div>
    );
  }

  // Key Specs er sob row ekta list e rakhlam, jate niche map kore dekhano jay
  const specs = [
    { label: "Equipment", value: workout.equipment },
    { label: "Difficulty", value: workout.difficulty },
    { label: "Sets", value: workout.sets },
    { label: "Reps", value: workout.reps },
    { label: "Duration", value: `${workout.duration} min` },
    { label: "Calories", value: `${workout.caloriesBurned} kcal` },
    { label: "Rating", value: workout.rating },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-8">
      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        {/* Bame: boro chobi */}
        <div>
          <img
            src={workout.image}
            alt={workout.name}
            className="h-auto w-full rounded-2xl border border-[#23262e] object-cover"
          />
        </div>

        {/* Dane: sob lekha */}
        <div>
          <h1 className="font-oswald text-4xl font-bold uppercase sm:text-5xl">
            {workout.name}
          </h1>
          <p className="mt-3 text-gray-400">{workout.description}</p>

          {/* Category */}
          <div className="mt-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-semibold text-black"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Key Specs panel */}
          <div className="mt-6 overflow-hidden rounded-xl border border-[#23262e] bg-[#13151a]">
            {specs.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between border-b border-[#23262e] px-5 py-3 last:border-b-0"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {item.label}
                </span>
                <span className="text-sm">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <h2 className="mt-8 text-sm font-bold uppercase tracking-wider">
            Instructions
          </h2>
          <ol className="mt-3 space-y-2 text-sm text-gray-300">
            {workout.instructions.map((step, index) => (
              <li key={step}>
                {index + 1}. {step}
              </li>
            ))}
          </ol>

          {/* Duita button (kaj Step 8 e hobe) */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="flex items-center gap-2 rounded-lg bg-[#ccff00] px-5 py-3 text-sm font-bold text-black hover:opacity-90">
              <CalendarPlus size={18} />
              Add to today&apos;s plan
            </button>

            <button className="flex items-center gap-2 rounded-lg border border-gray-600 px-5 py-3 text-sm font-semibold hover:border-white">
              <Bookmark size={18} />
              Save for later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
