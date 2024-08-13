import NumberPerPageDisplay from "../components/design components/NumberPerPageDisplay";
import Banner from "../components/design components/Banner";

export default function NumberPerPage() {
  return (
    <>
      {/* Creating the header to be the same as every other page. */}
      {/*  */}
      <Banner />
      {/*  */}
      {/*  Creating the title for the page */}
      {/*  */}
      <h1 className="text-4xl py-5 text-center">
        Choose the Number of Pokemon to Display per Page
      </h1>
      {/*  */}
      {/*  Creates the links to each display page depending on the users preference of pokemon per page.*/}
      {/*  */}
      <NumberPerPageDisplay />
    </>
  );
}
