
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { ProjectSection } from "./components/ProjectsSection"
import { SectionAbout } from "./components/SectionAbout"
import { SectionBanner } from "./components/SectionBanner"
import { TechSection } from "./components/TechSection"

import './styles/index.css'

function App() {

  return (
    <>
      <div className="container">
        <Header />
        <SectionBanner />
        <SectionAbout />
        <TechSection />
        <ProjectSection />
        <Footer />
      </div>

    </>
  )
}

export default App
