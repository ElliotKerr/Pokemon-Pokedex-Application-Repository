import Link from "next/link";

export default function Banner() {
  return (
    <>
      <h1 className="text-center text-8xl pt-12 pb-12 bg-blue-700 text-yellow-500 font-sans">
        Pokemon List
      </h1>
      <div className="absolute top-3 text-s font-bold tracking-wider">
        <Link
          href="/"
          className=" bg-blue-200 px-5 py-2 rounded-full hover:bg-yellow-500 hover:text-blue-700"
        >
          Home
        </Link>
        <br /> <br />
        <Link
          href="/number_per_page"
          className=" bg-blue-200 px-5 py-2 rounded-full hover:bg-yellow-500 hover:text-blue-700"
        >
          Choose Number of Pokemon per Page
        </Link>
        <br /> <br />
        <Link
          href="/generation"
          className=" bg-blue-200 px-5 py-2 rounded-full hover:bg-yellow-500 hover:text-blue-700"
        >
          Chose by Generation
        </Link>
        <br /> <br />
        <Link
          href="/searchbar"
          className=" bg-blue-200 px-5 py-2 rounded-full hover:bg-yellow-500 hover:text-blue-700"
        >
          Search Pokemon Name
        </Link>
      </div>
    </>
  );
}
