import Navbar from "./components/Navbar"
import './app.scss'
import Menus from "./components/enums"
import { useState } from "react"
import MainBody from "./pages/MainBody"
import ExperienciaBody from "./pages/ExperienciaBody"
import SobreMiBody from "./pages/SobreMiBody"
import ContactBody from "./pages/ContactBody" 

function App() {
  const [view, setView] = useState({current: Menus.Main, waitingAnimation: ''})

  return (
    <div className="w-full p-10">
      {/* Header */}
      <Navbar setView={setView} view={view} />

      {/* Body */}
      <div id="body-container">
        {view.waitingAnimation !== '' ? <RenderBody menu={view.waitingAnimation}/>:<RenderBody menu={view.current} />}
      </div>

    </div>
  )
}

function RenderBody({ menu }: { menu: string }) {
  if (menu === Menus.Main) {
    return <MainBody />
  } else if (menu === Menus.Experiencia) {
    return <ExperienciaBody />
  } else if (menu === Menus.SobreMi) {
    return <SobreMiBody />
  } else if (menu === Menus.Conectemos) {
    return <ContactBody />
  } else return <></>
}

export default App
