"use client";
import Banner from "@/app/components/design components/Banner";
import PokemonSpeciesApiDraw from "@/app/components/program components/PokemonSpeciesApiDraw";
import { useRouter } from "next/navigation";

export default function PokemonInfo({
  params,
}: {
  params: { pokemon: string };
}) {
  const pokemonName = params.pokemon;
  const router = useRouter();

  function goBack() {
    router.back();
  }
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

  function hyphenRemoval(text: string) {
    if (problemPokemon.some((el) => text.includes(el))) {
      const pokemonSplit = text.split("-");
      return pokemonSplit[0];
    } else {
      return text;
    }
  }

  return (
    <>
      <Banner />
      <div className="absolute top-20 end-72">
        <button
          className=" bg-blue-200 px-5 py-2 rounded-full hover:bg-yellow-500 hover:text-blue-700 text-s font-bold tracking-wider"
          onClick={goBack}
        >
          Back To List
        </button>
      </div>
      <PokemonSpeciesApiDraw pokemon={hyphenRemoval(pokemonName)} />
    </>
  );
}
