"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  // এখন আমরা কোন page এ আছি সেটা জানার জন্য (যেমন "/" বা "/my-plan")
  const pathname = usePathname();

  // আপাতত 0 রাখলাম, Step 4 এ এগুলো আসল সংখ্যা হবে
  const planCount = 0;
  const savedCount = 0;

  // Active link আর সাধারণ link এর style আলাদা করে রাখলাম
  const activeStyle = "bg-[#1c2308] text-[#ccff00]";
  const normalStyle = "text-gray-400 hover:text-white";

  return (
    <nav className="border-b border-[#23262e] bg-[#0c0d10]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8">
        {/* বামে: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="FitLog logo"
            width={28}
            height={28}
            className="h-7 w-auto"
          />
          <span className="font-oswald hidden text-xl font-bold tracking-wide sm:inline">
            FITLOG
          </span>
        </Link>

        {/* মাঝে: Navigation link */}
        <div className="flex items-center gap-1 sm:gap-3">
          <Link
            href="/"
            className={`rounded-full px-3 py-1.5 text-sm ${
              pathname === "/" ? activeStyle : normalStyle
            }`}
          >
            Workouts
          </Link>
          <Link
            href="/my-plan"
            className={`rounded-full px-3 py-1.5 text-sm ${
              pathname === "/my-plan" ? activeStyle : normalStyle
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* ডানে: Plan আর Saved badge */}
        <div className="flex items-center gap-3 text-sm">
          <Link href="/my-plan" className="flex items-center gap-2">
            <span>Plan</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ccff00] text-xs font-bold text-black">
              {planCount}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-gray-400"
          >
            <span>Saved</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-500 text-xs text-white">
              {savedCount}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
