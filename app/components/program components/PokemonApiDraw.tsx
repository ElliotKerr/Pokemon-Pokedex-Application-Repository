"use client";
import axios from "axios";
import { useState, useEffect } from "react";

export default function PokemonApiDraw({
  pokemonSpecies,
  pokedexNumber,
  pokemonNameCapitalised,
  pokemonDefaultForm,
}: any) {
  const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/" + pokemonSpecies;
  const [abilities, setAbilities] = useState([]);
  const [id, setId] = useState();
  const [stats, setStats] = useState([]);
  const [sprite, setSprite] = useState([]);
  const [shinySprite, setShinySprite] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios.get(pokemonUrl).then((res) => {
      console.log(res.data);
      setId(res.data.id);
      setTypes(
        res.data.types.map((pkmtype: { type: any }) => pkmtype.type.name)
      );
      setAbilities(
        res.data.abilities.map((p: any) => [p.ability.name, p.is_hidden])
      );
      setStats(
        res.data.stats.map((poke: any) => [poke.stat.name, poke.base_stat])
      );
      setSprite(res.data.sprites.other["official-artwork"].front_default);
      setShinySprite(res.data.sprites.other["official-artwork"].front_shiny);
    });
  }, [pokemonUrl]);

  const isDefault = () => {
    if (pokemonDefaultForm) {
      return "Base Form: Yes";
    } else {
      return "Base Form: No";
    }
  };

  function formName() {
    const pokemonNameLength = pokemonNameCapitalised.length;
    const pokemonFormName =
      pokemonSpecies
        .substring(pokemonNameLength + 1, pokemonNameLength + 2)
        .toUpperCase() + pokemonSpecies.substring(pokemonNameLength + 2);
    return pokemonFormName;
  }

  const formedPokemon = ["Mega", "Primal", "Gmax"];

  function pokemonWithFormsInTheName() {
    const text = pokemonSpecies;
    if (formedPokemon.some((el) => text.includes(el.toLowerCase()))) {
      const splitString = text.split("-");
      if (splitString.length == 3) {
        return splitString[1] + " " + splitString[0] + " " + splitString[2];
      } else if (splitString.length == 2) {
        return splitString[1] + " " + splitString[0];
      } else {
        return splitString[0];
      }
    } else {
      return pokemonNameCapitalised;
    }
  }
  return (
    <>
      <div>
        {/*  */}
        {/* Displays the sprite */}
        {/*  */}

        <div className=" mx-auto h-48 flex justify-center text-sm">
          <img
            src={sprite}
            alt={`Regular Sprite of ` + pokemonWithFormsInTheName()}
          />
          <img
            src={shinySprite}
            alt={`Shiny Sprite of ` + pokemonWithFormsInTheName()}
          />
        </div>

        {/*  */}
        {/* Displays the Name*/}
        {/*  */}
        <div>
          <h2 className="capitalize font-sans text-4xl text-center">
            {pokemonWithFormsInTheName()}
          </h2>
        </div>

        {/*  */}
        {/* Displays the Pokedex Number*/}
        {/*  */}

        <div>
          <p className="font-sans text-2xl text-center">
            Pokedex Number: {pokedexNumber}
          </p>
        </div>

        {/*  */}
        {/* Displays the form of the Pokemon*/}
        {/*  */}

        <div>
          <p className="font-sans text-2xl text-center">Form: {formName()}</p>{" "}
        </div>

        {/*  */}
        {/* Displays whether the respective Pokemon form is the default */}
        {/*  */}

        <div>
          <p className="font-sans text-2xl text-center">{isDefault()}</p> <br />
        </div>

        {/*  */}
        {/* Displays whether the respective Pokemon form is the default */}
        {/*  */}

        <div>
          <h2>{types.length == 1 ? "Type" : "Types"}:</h2>
          <p className="font-sans text-2xl text-center capitalize">
            {types.map((type) => (
              <div>{type}</div>
            ))}
          </p>
          <br />
        </div>

        {/*  */}
        {/* Displays the Abilities in an unordered list*/}
        {/*  */}

        <div>
          <h2>Abilities:</h2>
          <ul className="font-sans text-2xl text-center">
            {abilities.map((ability: any) => (
              <li className="capitalize text-center">
                {ability[1] ? `Hidden Ability: ` + ability[0] : ability[0]}
              </li>
            ))}
          </ul>
          <br />
        </div>

        {/*  */}
        {/* Displays the Stats in an unordered list*/}
        {/*  */}
        <div>
          <p>Stats:</p>
          <ul className="font-sans text-2xl text-center">
            {stats.map((stat: any) => (
              <li className="capitalize text-center">
                {stat[0]} : {stat[1]}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <br />
    </>
  );
}
