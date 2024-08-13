import React, { useEffect, useState } from "react";

export default function GenerationChooser({ input }: any) {
  const [generationNumber, setGenerationNumber] = useState("");
  const [generationStart, setGenerationStart] = useState("");
  const [generationSize, setGenerationSize] = useState("");
  const [currentPageUrl, setcurrentPageUrl] = useState("");

  useEffect(() => {
    if (input == "generation1") {
      setGenerationNumber("1");
      setGenerationStart("0");
      setGenerationSize("151");

      // none

      // "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"

      // "https://pokeapi.co/api/v2/pokemon?limit=100&offset=151"

    } else if (input == "generation2") {
      setGenerationNumber("2");
      setGenerationStart("151");
      setGenerationSize("100");

      // "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"

      // "https://pokeapi.co/api/v2/pokemon?limit=100&offset=151"

      // "https://pokeapi.co/api/v2/pokemon?limit=135&offset=251"


    } else if (input == "generation3") {
      setGenerationNumber("3");
      setGenerationStart("251");
      setGenerationSize("135");

      // "https://pokeapi.co/api/v2/pokemon?limit=100&offset=151"      

      // "https://pokeapi.co/api/v2/pokemon?limit=135&offset=251"

      // "https://pokeapi.co/api/v2/pokemon?limit=107&offset=386"

    } else if (input == "generation4") {
      setGenerationNumber("4");
      setGenerationStart("386");
      setGenerationSize("107");

      // "https://pokeapi.co/api/v2/pokemon?limit=135&offset=251"

      // "https://pokeapi.co/api/v2/pokemon?limit=107&offset=386"

      // "https://pokeapi.co/api/v2/pokemon?limit=156&offset=494"


    } else if (input == "generation5") {
      setGenerationNumber("5");
      setGenerationStart("494");
      setGenerationSize("156");

      // "https://pokeapi.co/api/v2/pokemon?limit=107&offset=386"

      // "https://pokeapi.co/api/v2/pokemon?limit=156&offset=494"

      // "https://pokeapi.co/api/v2/pokemon?limit=72&offset=649"

    } else if (input == "generation6") {
      setGenerationNumber("6");
      setGenerationStart("649");
      setGenerationSize("72");

      // "https://pokeapi.co/api/v2/pokemon?limit=156&offset=494"

      // "https://pokeapi.co/api/v2/pokemon?limit=72&offset=649"

      // "https://pokeapi.co/api/v2/pokemon?limit=88&offset=721"

    } else if (input == "generation7") {
      setGenerationNumber("7");
      setGenerationStart("721");
      setGenerationSize("88");

      // "https://pokeapi.co/api/v2/pokemon?limit=72&offset=649"

      // "https://pokeapi.co/api/v2/pokemon?limit=88&offset=721"

      // "https://pokeapi.co/api/v2/pokemon?limit=96&offset=810"

    } else if (input == "generation8") {
      setGenerationNumber("8");
      setGenerationStart("810");
      setGenerationSize("96");
      
      // "https://pokeapi.co/api/v2/pokemon?limit=88&offset=721"

      // "https://pokeapi.co/api/v2/pokemon?limit=96&offset=810"

      // "https://pokeapi.co/api/v2/pokemon?limit=120&offset=905"

    } else {
      setGenerationNumber("9");
      setGenerationStart("905");
      setGenerationSize("120");

      // "https://pokeapi.co/api/v2/pokemon?limit=96&offset=810"

      // "https://pokeapi.co/api/v2/pokemon?limit=120&offset=905"

      // none

    }
    setcurrentPageUrl(
      "https://pokeapi.co/api/v2/pokemon?limit=" +
        generationSize +
        "&offset=" +
        generationStart
    );
  }, [currentPageUrl]);
  return currentPageUrl;
}
