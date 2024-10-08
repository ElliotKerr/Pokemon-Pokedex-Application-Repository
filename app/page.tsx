import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-center text-8xl pt-12 pb-12 bg-blue-700 text-yellow-500 font-sans">
        Pokemon List
      </h1>
      <br />
      <div className="p-32 flex justify-center gap-6">
        <Link
          href="/number_per_page"
          className="bg-blue-200 px-10 py-5 text-2xl font-bold tracking-wider rounded-full hover:bg-blue-700 hover:text-yellow-500"
        >
          Choose Number of Pokemon per Page
        </Link>
        <Link
          href="/generation"
          className="bg-blue-200 px-10 py-5 text-2xl font-bold tracking-wider rounded-full hover:bg-blue-700 hover:text-yellow-500"
        >
          Chose by Generation
        </Link>
        <Link
          href="/searchbar"
          className="bg-blue-200 px-10 py-5 text-2xl font-bold tracking-wider rounded-full hover:bg-blue-700 hover:text-yellow-500"
        >
          Search Pokemon Name
        </Link>
      </div>
    </>
  );
}
