import { useRef, useState } from "react";
import AddModal from "./AddModal";
import CardAdder from "./CardAdder";

const Add_Search = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  function addSwitch() {
    setIsClicked(!isClicked);
    // console.log(isClicked);
  }

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-5 mt-5">
        <button
          onClick={addSwitch}
          type="button"
          className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-emerald-600 dark:hover:bg-emerald-700 focus:outline-none dark:focus:ring-emerald-800"
        >
          Add
        </button>
        {isClicked && <AddModal onClose={addSwitch} />}
        <input
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          className="rounded-lg px-5 py-2.5 mr-2 mb-2 bg-slate-200 border border-emerald-700 bg-opacity-50 focus:ring-emerald-700 dark:bg-white dark:text-slate-800"
          placeholder="Search for FlashCards"
        />
      </div>
      <CardAdder searchQuery={searchQuery} />
    </>
  );
};

export default Add_Search;
