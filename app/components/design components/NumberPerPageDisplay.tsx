import Link from "next/link";
import React from "react";

export default function NumberPerPageDisplay() {
  return (
    <>
      <div className="flex justify-center gap-6">
        <Link
          href="/number_per_page/25"
          className="bg-blue-200 px-10 py-5 text-2xl font-bold tracking-wider rounded-full hover:bg-blue-700 hover:text-yellow-500"
        >
          25
        </Link>
        <Link
          href="/number_per_page/50"
          className="bg-blue-200 px-10 py-5 text-2xl font-bold tracking-wider rounded-full hover:bg-blue-700 hover:text-yellow-500"
        >
          50
        </Link>
        <Link
          href="/number_per_page/100"
          className="bg-blue-200 px-10 py-5 text-2xl font-bold tracking-wider rounded-full hover:bg-blue-700 hover:text-yellow-500"
        >
          100
        </Link>
        <Link
          href="/number_per_page/1025"
          className="bg-blue-200 px-10 py-5 text-2xl font-bold tracking-wider rounded-full hover:bg-blue-700 hover:text-yellow-500"
        >
          All
        </Link>
      </div>
    </>
  );
}
