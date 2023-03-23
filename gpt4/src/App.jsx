import Companylogo from "./components/Companylogo"
import HeroPage from "./components/HeroPage"
import Navbar from "./components/Navbar"
import PaperContent from "./components/PaperContent"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroPage/>
      <Companylogo/>
      <PaperContent/>
    </div>
  )
}

export default App
