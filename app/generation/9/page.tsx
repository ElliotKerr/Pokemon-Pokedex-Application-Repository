"use client";
import Banner from "@/app/components/design components/Banner";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Generation9List() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setcurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=120&offset=905"
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // fetches the data from the API, then changes all states to the values necessary
    axios.get(currentPageUrl).then((res) => {
      setLoading(false);
      setPokemon(res.data.results.map((p: { name: any }) => p.name));
    });
  }, [currentPageUrl]);

  if (loading)
    return (
      <>
        <h1 className="text-center text-8xl pt-12 pb-12 bg-blue-700 text-yellow-500 font-sans">
          Pokemon List
        </h1>
        <p className="text-center text-8xl">Loading...</p>
      </>
    );

  function HyphenRemoval(pokemonName: any) {
    const problemPokemon = [
      "-normal",
      "-plant",
      "-altered",
      "-land",
      "-red-striped",
      "-standard",
      "-incarnate",
      "-ordinary",
      "-aria",
      "-male",
      "-shield",
      "-average",
      "-50",
      "-baile",
      "-midday",
      "-solo",
      "-red-meteor",
      "-disguised",
      "-amped",
      "-ice",
      "-full-belly",
      "-single-strike",
    ];
    if (problemPokemon.some((el) => pokemonName.includes(el.toLowerCase()))) {
      const pokemonSplit = pokemonName.split("-");
      return pokemonSplit[0];
    } else {
      return pokemonName;
    }
  }

  return (
    <>
      {/* Creating the header to be the same as every other page. */}
      {/*  */}

      <Banner />

      {/*  */}
      {/*  Creating the title for the page */}
      {/*  */}

      <h1 className="text-4xl py-5 text-center ">Generation 9</h1>

      {/*  */}
      {/*  Creating links to the next generation and previous generation */}
      {/*  */}

      <div>
        <Link
          href="/generation/8"
          className="absolute top-20 right-96 bg-blue-200 px-5 py-2 rounded-full hover:bg-yellow-500 hover:text-blue-700 text-s font-bold tracking-wider"
        >
          Generation 8
        </Link>
        <Link
          href="/generation/1"
          className="absolute top-20 end-40 bg-blue-200 px-5 py-2 rounded-full hover:bg-yellow-500 hover:text-blue-700 text-s font-bold tracking-wider"
        >
          Back to Generation 1
        </Link>
      </div>

      {/*  */}
      {/*  Creates a list of names in 3 columns using a mapping. Each name is linked to the page containting all the pokemons details */}
      {/*  */}

      <div>
        <ul className="text-center grid grid-cols-3 gap-8 text-3xl font-bold pt-8 pb-8">
          {pokemon.map((p: any) => (
            <li>
              <Link
                href={`/pokemon/${p}`}
                className="text-transform: capitalize bg-blue-200 px-5 py-2 rounded-full hover:bg-yellow-500 hover:text-blue-700"
              >
                {HyphenRemoval(p)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
