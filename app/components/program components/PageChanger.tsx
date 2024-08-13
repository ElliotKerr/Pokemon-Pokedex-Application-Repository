import React from "react";

// PageChanger takes 2 functions as inputs and creates buttons which will move to the next set of pokemon or the previous.
export default function PageChanger({
  gotoNextPage,
  gotoPreviousPage,
  gotoFirstPage,
}: any) {
  return (
    <div>
      {gotoPreviousPage && (
        <button
          className="absolute top-20 right-96 bg-blue-200 px-5 py-2 rounded-full hover:bg-yellow-500 hover:text-blue-700 text-s font-bold tracking-wider"
          onClick={gotoPreviousPage}
        >
          Previous Page
        </button>
      )}
      {gotoNextPage && (
        <button
          className="absolute top-20 end-60 bg-blue-200 px-5 py-2 rounded-full hover:bg-yellow-500 hover:text-blue-700 text-s font-bold tracking-wider"
          onClick={gotoNextPage}
        >
          Next Page
        </button>
      )}
      {gotoFirstPage && (
        <button
          className="absolute top-20 end-24 bg-blue-200 px-5 py-2 rounded-full hover:bg-yellow-500 hover:text-blue-700 text-s font-bold tracking-wider"
          onClick={gotoFirstPage}
        >
          First Page
        </button>
      )}
    </div>
  );
}
