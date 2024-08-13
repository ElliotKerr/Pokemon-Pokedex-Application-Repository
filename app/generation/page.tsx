import Banner from "../components/design components/Banner";
import GenerationPerPageDisplay from "../components/design components/GenerationPerPageDisplay";

export default function GenerationsChoice() {
  return (
    <>
      {/* The function Banner is a server side component in "../components/design components" that holds the banner styling. This makes it easier to copy across to other pages so they look identical */}
      <Banner />

      <h1 className="text-4xl py-5 text-center">Choose by Generation</h1>

      {/* Creating another component that holds the generations choice page, with 10 links. It isn't likely to be copied to other pages but it makes this page nicer to look at. */}
      <GenerationPerPageDisplay />
    </>
  );
}
