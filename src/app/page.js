"use client";
import Hero from "../components/Hero";
import { useEffect, useState } from "react";
import WorkoutCard from "../components/WorkoutCard";
import { getAllWorkouts } from "../lib/api";

export default function Home() {
  // Workout er list, loading cholche kina, ar error message
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Page khulle ekbar API theke data anbo
  useEffect(() => {
    async function loadData() {
      try {
        const data = await getAllWorkouts();
        setWorkouts(data);
      } catch (error) {
        console.log(error);
        setError("Workout load kora jayni. Page reload kore dekho.");
      }
      // Data ashuk ba error hok, loading ta ekhane shesh tai setLoading e false pathalam
      setLoading(false);
    }

    loadData();
  }, []);

  return (
    <div>
      <Hero />

      <section id="library" className="mx-auto max-w-7xl px-4 py-16 sm:px-8">
        <h2 className="font-oswald text-3xl font-bold">THE LIBRARY</h2>
        <p className="mt-1 text-sm text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>

        {/* Loading cholar shomoy ghurte thaka circle */}
        {loading && (
          <div className="flex flex-col items-center gap-3 py-20">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#23262e] border-t-[#ccff00]" />
            <p className="text-sm text-gray-400">Loading workouts…</p>
          </div>
        )}

        {/* Error hole message */}
        {error && <p className="py-10 text-center text-red-400">{error}</p>}

        {/* Data ashle card gulo grid e dekhabo */}
        {!loading && !error && (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {workouts.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
