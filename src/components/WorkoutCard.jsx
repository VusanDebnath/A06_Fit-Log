import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";

// workout hocche ekta workout er sob data (props hishebe ashe)
export default function WorkoutCard({ workout }) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="block overflow-hidden rounded-xl border border-[#23262e] bg-[#13151a] hover:border-[#ccff00]"
    >
      {/* Card er upor er chobi */}
      <img
        src={workout.image}
        alt={workout.name}
        className="h-44 w-full object-cover"
      />

      <div className="p-4">
        {/* Category pill gulo: CHEST, ARMS ... */}
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-[#ccff00] px-2.5 py-0.5 text-[10px] font-bold uppercase text-black"
            >
              {group}
            </span>
          ))}
        </div>

        {/* Workout er nam ar equipment */}
        <h3 className="font-oswald mt-3 text-lg font-bold uppercase">
          {workout.name}
        </h3>
        <p className="mt-1 text-xs text-gray-500">{workout.equipment}</p>

        {/* Niche: duration, calories, rating */}
        <div className="mt-4 flex items-center gap-4 border-t border-[#23262e] pt-3 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {workout.duration} min
          </span>
          <span className="flex items-center gap-1">
            <Flame size={14} />
            {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <Star size={14} />
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}
