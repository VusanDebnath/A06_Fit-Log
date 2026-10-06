import Link from "next/link";
import { Clock, Flame, Star, Check, X } from "lucide-react";

// Props: workout (data), showDone (Mark as Done button dekhabo kina),
// isDone (kaj shesh kina), onDone ar onRemove (button chapar function)
export default function PlanItem({
  workout,
  showDone,
  isDone,
  onDone,
  onRemove,
}) {
  return (
    <div
      className={`flex flex-col gap-4 rounded-xl border border-[#23262e] bg-[#13151a] p-4 sm:flex-row sm:items-center ${
        isDone ? "opacity-60" : ""
      }`}
    >
      {/* Bame: choto chobi */}
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

      {/* Dane: button gulo */}
      <div className="flex flex-wrap items-center gap-2">
        <Link
          href={`/workout/${workout.id}`}
          className="rounded-full border border-gray-600 px-4 py-2 text-sm hover:border-white"
        >
          View Details
        </Link>

        {/* Mark as Done shudhu Today's Plan tab e dekhabo */}
        {showDone && (
          <button
            onClick={onDone}
            disabled={isDone}
            className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-bold ${
              isDone
                ? "cursor-default bg-[#1b1e25] text-[#ccff00]"
                : "bg-[#ccff00] text-black hover:opacity-90"
            }`}
          >
            <Check size={16} />
            {isDone ? "Done" : "Mark as Done"}
          </button>
        )}

        {/* X button: workout shoriye dibe */}
        <button
          onClick={onRemove}
          aria-label="Remove workout"
          className="p-2 text-gray-400 hover:text-white"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
