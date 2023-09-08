import { useState } from "react";
import Header from "../Components/Main/Header";
import Add_Search from "../Components/Main/Add_Search";

const Main = ({ isDark, setIsDark }) => {
  return (
    <>
      <section className="min-h-screen dark:dark:bg-slate-900 bg-slate-100">
        <Header isDark={isDark} setIsDark={setIsDark} />
        <Add_Search />
      </section>
    </>
  );
};

export default Main;
