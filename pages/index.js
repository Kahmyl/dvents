import Navbar from '../Components/Nav/Navbar'
import { Container, Wrapper } from '../Components/Global'
import Slider from '../Components/Slider';
import Footer from '../Components/Footer';
import LowSection from '../Components/LandingComp/LowSection';
import Schedule from '../Components/LandingComp/Schedule'

export default function Home() {

  
  
  return (
    <div>
        <Navbar/>
          <Slider />
          <LowSection/>
          <Schedule/>
        <Footer/>
    </div>
  )
}
