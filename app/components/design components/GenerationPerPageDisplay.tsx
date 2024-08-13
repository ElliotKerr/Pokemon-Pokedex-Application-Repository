import Link from "next/link";
import React from "react";

export default function GenerationPerPageDisplay() {
  return (
    <>
      <div className="flex justify-center gap-6">
        <Link
          className="bg-blue-200 px-10 py-5 text-2xl font-bold tracking-wider rounded-full hover:bg-blue-700 hover:text-yellow-500"
          href={"/generation/1"}
        >
          Generation 1
        </Link>
        <Link
          className="bg-blue-200 px-10 py-5 text-2xl font-bold tracking-wider rounded-full hover:bg-blue-700 hover:text-yellow-500"
          href={"/generation/2"}
        >
          Generation 2
        </Link>
        <Link
          className="bg-blue-200 px-10 py-5 text-2xl font-bold tracking-wider rounded-full hover:bg-blue-700 hover:text-yellow-500"
          href={"/generation/3"}
        >
          Generation 3
        </Link>
      </div>
      <br />
      <div className="flex justify-center gap-6">
        <Link
          className="bg-blue-200 px-10 py-5 text-2xl font-bold tracking-wider rounded-full hover:bg-blue-700 hover:text-yellow-500"
          href={"/generation/4"}
        >
          Generation 4
        </Link>
        <Link
          className="bg-blue-200 px-10 py-5 text-2xl font-bold tracking-wider rounded-full hover:bg-blue-700 hover:text-yellow-500"
          href={"/generation/5"}
        >
          Generation 5
        </Link>
        <Link
          className="bg-blue-200 px-10 py-5 text-2xl font-bold tracking-wider rounded-full hover:bg-blue-700 hover:text-yellow-500"
          href={"/generation/6"}
        >
          Generation 6
        </Link>
      </div>
      <br />
      <div className="flex justify-center gap-6">
        <Link
          className="bg-blue-200 px-10 py-5 text-2xl font-bold tracking-wider rounded-full hover:bg-blue-700 hover:text-yellow-500"
          href={"/generation/7"}
        >
          Generation 7
        </Link>
        <Link
          className="bg-blue-200 px-10 py-5 text-2xl font-bold tracking-wider rounded-full hover:bg-blue-700 hover:text-yellow-500"
          href={"/generation/8"}
        >
          Generation 8
        </Link>
        <Link
          className="bg-blue-200 px-10 py-5 text-2xl font-bold tracking-wider rounded-full hover:bg-blue-700 hover:text-yellow-500"
          href={"/generation/9"}
        >
          Generation 9
        </Link>
      </div>
      <br />
      <div className="flex justify-center gap-6">
        <Link
          href="/generation/All"
          className="bg-blue-200 px-10 py-5 text-2xl font-bold tracking-wider rounded-full hover:bg-blue-700 hover:text-yellow-500"
        >
          All Pokemon
        </Link>
      </div>
    </>
  );
}
