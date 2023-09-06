import { useState } from "react";
import Add_Search from "./Components/Add_Search";

import Header from "./Components/Header";

function App() {
  // console.log(process.env.SUPABASE_KEY);
  const [isDark, setIsDark] = useState(true);
  return (
    <>
      <main className={` h-full ${isDark ? "dark" : ""}`}>
        <section className="min-h-screen dark:dark:bg-slate-900 bg-slate-100">
          <Header isDark={isDark} setIsDark={setIsDark} />
          <Add_Search />
        </section>
      </main>
    </>
  );
}

export default App;
