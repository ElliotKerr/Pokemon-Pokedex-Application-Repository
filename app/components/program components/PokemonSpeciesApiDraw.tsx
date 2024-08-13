"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import PokemonApiDraw from "./PokemonApiDraw";

export default function PokemonSpeciesApiDraw({
  pokemon,
}: {
  pokemon: string;
}) {
  const speciesUrl = "https://pokeapi.co/api/v2/pokemon-species/" + pokemon;
  const [pokedexNumber, setPokedexNumber] = useState([]);
  const [pokemonFormes, setPokemonFormes] = useState([]);
  const pokemonNameCapitalised =
    pokemon.substring(0, 1).toUpperCase() + pokemon.substring(1);

  useEffect(() => {
    axios.get(speciesUrl).then((res) => {
      setPokedexNumber(
        res.data.pokedex_numbers.map((dex: any) => dex.entry_number)
      );
      setPokemonFormes(
        res.data.varieties.map((formes: any) => [
          formes.pokemon.name,
          formes.is_default,
        ])
      );
    });
  }, []);

  const pokemonSpeciesCount = pokemonFormes.length;

  function formeStyling() {
    if (pokemonSpeciesCount == 1) {
      return "text-center grid grid-cols-1 gap-8 text-3xl font-bold pt-8 pb-8";
    } else if (pokemonSpeciesCount == 2) {
      return "text-center grid grid-cols-2 gap-8 text-3xl font-bold pt-8 pb-8";
    } else if (pokemonSpeciesCount == 3) {
      return "text-center grid grid-cols-3 gap-8 text-3xl font-bold pt-8 pb-8";
    } else {
      return "text-center grid grid-cols-4 gap-8 text-3xl font-bold pt-8 pb-8";
    }
  }

  return (
    <>
      <div className={formeStyling()}>
        {pokemonFormes.map((form: any) => (
          <div>
            <PokemonApiDraw
              pokemonSpecies={form[0]}
              pokedexNumber={pokedexNumber[0]}
              pokemonNameCapitalised={pokemonNameCapitalised}
              pokemonDefaultForm={form[1]}
            />
          </div>
        ))}
      </div>
    </>
  );
}
