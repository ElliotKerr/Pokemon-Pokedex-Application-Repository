"use client";
export default function HyphenRemoval(pokemonName: any) {
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
  if (problemPokemon.some((el) => pokemonName.includes(el))) {
    const pokemonSplit = pokemonName.split("-");
    return pokemonSplit[0];
  } else {
    return pokemonName;
  }
}
