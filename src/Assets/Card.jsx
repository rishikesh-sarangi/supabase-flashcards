import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import supabase from "../supabase";

const Card = ({ title, question, answer, hint1, hint2, cardID }) => {
  const [clickCardID, setClickCardID] = useState(null);

  async function deleteCard(id) {
    await supabase.from("flashcards").delete().eq("id", id);
  }

  return (
    <>
      <div
        className="rounded shadow-xl min-w-[22rem] max-w-[22rem] cursor-pointer dark:bg-slate-50 bg-slate-800 min-h-[11rem] max-h-[11rem]"
        onClick={() => setClickCardID(cardID !== clickCardID ? cardID : null)}
      >
        {clickCardID === cardID ? (
          <div className="flex items-center justify-center w-full h-full text-xl font-bold bg-green-400 rounded font-Montserrat dark:bg-green-600">
            {answer}
          </div>
        ) : (
          <div className="flex flex-col justify-center">
            <div className="px-6 py-4">
              <div className="flex items-start justify-between">
                <div className="mb-2 text-xl font-bold text-white font-Karla dark:text-black">
                  {title}
                </div>
                <AiFillDelete
                  className="text-2xl text-red-500 cursor-not-allowed hover:text-red-200 dark:text-red-600 dark:hover:text-red-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteCard(cardID);
                  }}
                />
              </div>

              <p className="font-semibold text-white break-words font-Montserrat dark:text-slate-800">
                {question}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span
                className={`dark:bg-slate-800 dark:text-white px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-white rounded-full ${
                  hint1 === "" ? "hidden" : "inline-block "
                }`}
              >
                {hint1}
              </span>
              <span
                className={`dark:bg-slate-800 dark:text-white px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-white rounded-full ${
                  hint2 === "" ? "hidden" : "inline-block "
                }`}
              >
                {hint2}
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
