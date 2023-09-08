import React from "react";
import { BsFillLightningFill } from "react-icons/bs";
const Landing = () => {
  return (
    <>
      <div className="dark:bg-red-500">
        <section className="min-h-screen dark:dark:bg-slate-900 bg-slate-100">
          <div className="flex flex-col items-center gap-5">
            <h1 className="flex flex-col py-12">
              <span className="text-2xl text-white font-NotoSans tracking-widest md:text-3xl">
                Welcome to
              </span>
              <span className="font-extrabold tracking-widest text-teal-500 uppercase font-NotoSans animate-pulse text-3xl md:text-6xl flex gap-2">
                MEMORY PULSE
                <BsFillLightningFill />
              </span>
            </h1>
            <buton className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-300 font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mb-2 dark:bg-emerald-600 dark:hover:bg-emerald-700 focus:outline-none dark:focus:ring-emerald-800 cursor-pointer">
              Login to get Started !
            </buton>
            <h1 className="text-xl text-teal-500 uppercase font-Montserrat font-semibold md:text-3xl mt-10">
              What is Memory Pulse ?
            </h1>
          </div>
          <div className="text-gray-200 flex mx-auto flex-col max-w-sm gap-5 text-md md:text-xl mt-2 text-center md:max-w-xl font-Karla">
            <p className="mx-4">
              Welcome to our cutting-edge FlashCard service, where learning is a
              breeze! Flashcards are renowned for their memory-boosting and
              learning-accelerating abilities. They make studying engaging,
              efficient, and enjoyable.
            </p>
            <p className="mx-4">
              Our platform takes flashcards to the next level. We offer a
              comprehensive tool to create dynamic flashcards tailored to your
              needs. Craft cards with ease, including a title, thought-provoking
              questions, concise answers, and two helpful hints. Whether you're
              a student, professional, or knowledge enthusiast, our FlashCard
              service caters to your unique learning goals.
            </p>
            <p className="mx-4">
              Say goodbye to traditional methods and embrace the future of
              learning with us. Revolutionize your education and embark on a
              path to success with our interactive flashcards!
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Landing;
