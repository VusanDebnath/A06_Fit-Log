import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const subtitle =
    "FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.";

  return (
    <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-8">
      {/* Hero er boro card */}
      <div className="flex flex-col items-center gap-8 rounded-2xl border border-[#23262e] bg-[#13151a] p-6 sm:p-10 md:flex-row md:justify-between">
        {/* Bame: lekha ar button */}
        <div className="md:w-1/2">
          <p className="text-xs font-semibold tracking-widest text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="font-oswald mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="mt-4 max-w-md text-gray-400">{subtitle}</p>

          <a
            href="#library"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#ccff00] px-5 py-3 text-sm font-bold text-black hover:opacity-90"
          >
            BROWSE WORKOUTS
            <ArrowDown size={18} />
          </a>
        </div>

        {/* Dane: banner chobi */}
        <div className="flex justify-center md:w-1/2">
          <Image
            src="/banner.png"
            alt="FitLog workout banner"
            width={500}
            height={400}
            className="h-auto w-full max-w-sm object-contain"
          />
        </div>
      </div>
    </section>
  );
}
