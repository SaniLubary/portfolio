import { useState } from "react";

import Navbar from "./components/Navbar";
import Menus from "./components/enums";

import "./app.scss";

import Main from "./pages/Main";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Contact from "./pages/Contact";

export interface View {
  current: string;
  waitingAnimation: string;
}

function App() {
  const [view, setView] = useState<View>({
    current: Menus.Main,
    waitingAnimation: "",
  });

  return (
    <>
      {/* Header */}
      <Navbar setView={setView} view={view} />

      {/* Body */}
      {view.waitingAnimation !== "" ? (
        <RenderBody menu={view.waitingAnimation} />
      ) : (
        <RenderBody menu={view.current} />
      )}
    </>
  );
}

function RenderBody({ menu }: { menu: string }) {
  if (menu === Menus.Main) {
    document.getElementById("root")?.classList.add("fullHeight");
  } else {
    document.getElementById("root")?.classList.remove("fullHeight");
  }

  if (menu === Menus.Main) {
    return <Main />;
  } else if (menu === Menus.Experiencia) {
    return <Experience />;
  } else if (menu === Menus.SobreMi) {
    return <About />;
  } else if (menu === Menus.Conectemos) {
    return <Contact />;
  } else return <></>;
}

export default App;
