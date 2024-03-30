import ButtonGradient from "./assets/svg/ButtonGradient"
import Benifits from "./components/Benifits"
import Collbaration from "./components/Collbaration"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"

const App = () => {
  return (
    <>
                   <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                         <Header/>
                         <Hero/>
                         <Benifits/>
                         <Collbaration/>
                         <Services/>
                   </div>
                   <ButtonGradient/>
    </>
  )
}

export default App