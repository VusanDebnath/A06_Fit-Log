import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";

// My Plan page er ekta workout er lambha card
export default function PlanItem({ workout }) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-[#23262e] bg-[#13151a] p-4 sm:flex-row sm:items-center">
      {/* Bame choto chobi */}
      <img
        src={workout.image}
        alt={workout.name}
        className="h-24 w-full rounded-lg object-cover sm:w-40"
      />

      {/* Majhe: nam, equipment, stats */}
      <div className="flex-1">
        <h3 className="font-oswald text-xl font-bold uppercase">
          {workout.name}
        </h3>
        <p className="mt-1 text-sm text-gray-400">{workout.equipment}</p>

        <div className="mt-2 flex items-center gap-4 text-sm text-gray-300">
          <span className="flex items-center gap-1">
            <Clock size={14} className="text-[#ccff00]" />
            {workout.duration} min
          </span>
          <span className="flex items-center gap-1">
            <Flame size={14} className="text-[#ccff00]" />
            {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <Star size={14} className="text-[#ccff00]" />
            {workout.rating}
          </span>
        </div>
      </div>

      {/* Dane button (Mark as Done ar X Step 10 e ashbe) */}
      <div className="flex items-center gap-2">
        <Link
          href={`/workout/${workout.id}`}
          className="rounded-full border border-gray-600 px-4 py-2 text-sm hover:border-white"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
