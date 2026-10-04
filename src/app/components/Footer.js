import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#23262e] bg-[#0c0d10]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row sm:px-8">
    
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="FitLog logo"
            width={24}
            height={24}
            className="h-6 w-auto"
          />
          <span className="font-oswald text-lg font-bold tracking-wide">
            FITLOG
          </span>
        </div>

        <p className="text-center text-sm text-gray-500">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
