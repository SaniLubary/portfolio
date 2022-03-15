import Navbar from "./components/Navbar"
import './app.scss'
import Menus from "./components/enums"
import { useState } from "react"
import Main from "./pages/Main"
import Experience from "./pages/Experience"
import About from "./pages/About"
import Contact from "./pages/Contact" 

function App() {
  const [view, setView] = useState({current: Menus.Main, waitingAnimation: ''})

  return (
    <div className="w-screen">
      {/* Header */}
      <Navbar setView={setView} view={view} />

      {/* Body */}
      <div className="content">
        {view.waitingAnimation !== '' ? <RenderBody menu={view.waitingAnimation}/>:<RenderBody menu={view.current} />}
      </div>

    </div>
  )
}

function RenderBody({ menu }: { menu: string }) {
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
