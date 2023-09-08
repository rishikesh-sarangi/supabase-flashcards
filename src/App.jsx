import { useState } from "react";
import Main from "./Pages/Main";
import Landing from "./Pages/Landing";

function App() {
  const [isDark, setIsDark] = useState(true);
  return (
    <>
      <main className={` h-full ${isDark ? "dark" : ""}`}>
        <Landing />
        {/* <Main isDark={isDark} setIsDark={setIsDark} /> */}
      </main>
    </>
  );
}

export default App;
