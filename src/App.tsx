import Navbar from "./components/Navbar"
import './app.scss'
import Menus from "./components/enums"
import { useState } from "react"
import Main from "./pages/Main"
import Experience from "./pages/Experience"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  const [view, setView] = useState({ current: Menus.Main, waitingAnimation: '' })

  return (
    <>
      {/* Header */}
      <Navbar setView={setView} view={view} />

      {/* Body */}
      {view.waitingAnimation !== '' ? <RenderBody menu={view.waitingAnimation} /> : <RenderBody menu={view.current} />}
    </>
  )
}

function RenderBody({ menu }: { menu: string }) {
  {/* Css to fix height on main view */}
  if (menu === Menus.Main) {
    document.getElementById('root')?.classList.add('fullHeight')
  } else {
    document.getElementById('root')?.classList.remove('fullHeight')
  }
  
  if (menu === Menus.Main) {
    return <Main />
  } else if (menu === Menus.Experiencia) {
    return <Experience />
  } else if (menu === Menus.SobreMi) {
    return <About />
  } else if (menu === Menus.Conectemos) {
    return <Contact />
  } else return <></>
}

export default App
