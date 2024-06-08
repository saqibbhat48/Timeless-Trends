import About from "./components/About"
import ContactForm from "./components/ContactForm"
import DesignCard from "./components/DesignCard"
import Footer from "./components/Footer"
import Home from "./components/Home"
import NavBar from "./components/Navbar"
import Offers from "./components/Offers"
import Services from "./components/Services"

function App() {
  

  return (
    <>
    <div className='overflow-hidden'>
    <NavBar/>
    <Home/>
    <About/>
    <Offers/>
    <Services/>
    <ContactForm/>
    <Footer/>
    </div>
    </>
  )
}

export default App
