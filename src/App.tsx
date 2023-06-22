import { useEffect, useState } from "react";

import Navbar from "./components/organisms/Navbar";
import { pages } from "./components/enums";

import "./app.scss";

import Main from "./pages/Main";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MenuDrawer from "./components/organisms/MenuDrawer";

export interface View {
  current: string;
  waitingAnimation: string;
}

function App() {
  const [view, setView] = useState<View>({
    current: pages.Main,
    waitingAnimation: "",
  });

  const [openedMenuDrawer, setOpenedMenuDrawer] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [view])

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Navbar setOpenedMenuDrawer={setOpenedMenuDrawer} setView={setView} view={view} />
      {openedMenuDrawer && <MenuDrawer openedMenuDrawer={openedMenuDrawer} setOpenedMenuDrawer={setOpenedMenuDrawer} setView={setView} view={view} />}
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
    case pages.Main:
      customRootHtmlCss('add')
      return <Main />
    case pages.About:
      return <About />
    case pages.Experience:
      customRootHtmlCss('add')
      return <Experience />
    case pages.Contact:
      customRootHtmlCss('remove')
      return <Contact />
    default:
      return <></>
  }
}

export default App;
