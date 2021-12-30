import Navbar from "./components/Navbar"
import './app.scss'
import Menus from "./components/enums"
import { useState } from "react"
import MainBody from "./components/MainBody"
import ExperienciaBody from "./components/ExperienciaBody"

function App() {
  const [view, setView] = useState(Menus.Main)

  return (
    <div className="w-full p-10">
      {/* Header */}
      <Navbar setView={setView} view={view} />

      {/* Body */}
      {view === Menus.Main && <MainBody />}
      {view === Menus.Experiencia && <ExperienciaBody />}

    </div>
  )
}

export default App
