"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Banner from "../components/design components/Banner";

export default function SearchBar() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setcurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0"
  );
  const [nextPageUrl, setnextPageUrl] = useState("");
  const [previousPageUrl, setpreviousPageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  // using "useEffect" to manage mass updates of our state variables, including URL and pokemon updates.
  useEffect(() => {
    setLoading(true);
    // fetches the data from the API, then changes all states to the values necessary
    axios.get(currentPageUrl).then((res) => {
      setLoading(false);
      setnextPageUrl(res.data.next);
      setpreviousPageUrl(res.data.previous);
      setPokemon(res.data.results.map((p: { name: any }) => p.name));
    });
  }, [currentPageUrl]);

  // created an if statement to give display "Loading..." if it is taking time to fetch the data from the API. We have given it the same banner so the page doesn't change too much.
  if (loading)
    return (
      <>
        <Banner />
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

  const searchFilter = (pokemonList: any) => {
    return pokemonList.filter((pokemon: any) =>
      HyphenRemoval(pokemon).toLowerCase().includes(searchText.toLowerCase())
    );
  };
  const filteredPokemonList = searchFilter(pokemon);

  return (
    <>
      {/*  */}
      {/* Creating the header to be the same as every other page. */}
      {/*  */}

      <Banner />

      {/*  */}
      {/*  Creating the title for the page */}
      {/*  */}

      <h1 className="text-4xl py-5 text-center">Search for a Pokemon</h1>

      {/*  */}
      {/*  Creating the search bar using inputs*/}
      {/*  */}

      <div className=" flex flex-col items-center justify-center">
        <label htmlFor="pokemonName"></label>
        <br></br>
        <input
          type="text"
          value={searchText}
          id="pokemonName"
          placeholder="Search for Pokemon..."
          className="bg-blue-200 w-11/12 h-auto p-3 rounded-full md:w-8/12 xl:w-1/2 font-bold"
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
      </div>

      {/*  */}
      {/*  Creates a list of names in 3 columns using a mapping. Each name is linked to the page containting all the pokemons details */}
      {/*  */}

      <div>
        <ul className="text-center grid grid-cols-3 gap-8 text-3xl font-bold pb-8 pt-8">
          {filteredPokemonList.map((p: any) => (
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
