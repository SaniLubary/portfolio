import { useEffect, useState } from "react";

import Navbar from "./components/organisms/Navbar";
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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [view])

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <Navbar setView={setView} view={view} />

      {/* Body */}
      <Body menu={view.waitingAnimation !== "" ? view.waitingAnimation : view.current} />
    </div>
  );
}

function customRootHtmlCss(action: 'add' | 'remove') {
  switch (action) {
    case 'remove':
      document.getElementById("root")?.classList.remove("fullHeight")
      document.getElementsByTagName("html")[0]?.classList.remove("overflowY")
      break;
    case 'add':
      document.getElementById("root")?.classList.add("fullHeight")
      document.getElementsByTagName("html")[0]?.classList.add("overflowY")
      break;
    default:
      throw new Error("Bad action for customRootHtmlCss: " + action);
  }
}

function Body({ menu }: { menu: string }) {
  customRootHtmlCss('remove')
  switch (menu) {
    case Menus.Main:
      customRootHtmlCss('add')
      return <Main />
    case Menus.About:
      return <About />
    case Menus.Experience:
      customRootHtmlCss('add')
      return <Experience />
    case Menus.Contact:
      customRootHtmlCss('remove')
      return <Contact />
    default:
      return <></>
  }
}

export default App;
