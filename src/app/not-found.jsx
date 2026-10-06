import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center px-4 py-24 text-center">
      <p className="font-oswald text-8xl font-bold text-[#ccff00] sm:text-9xl">
        404
      </p>

      <h1 className="font-oswald mt-4 text-3xl font-bold uppercase">
        PAGE NOT FOUND
      </h1>

      <p className="mt-2 max-w-md text-gray-400">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-full bg-[#ccff00] px-6 py-3 text-sm font-bold text-black hover:opacity-90"
      >
        Back to workouts
      </Link>
    </div>
  );
}
