import Navbar from '../Components/Nav/Navbar'
import { Container, Wrapper } from '../Components/Global'
import Slider from '../Components/Slider';
import Footer from '../Components/Footer';
import LowSection from '../Components/LandingComp/LowSection';

export default function Home() {

  
  
  return (
    <div>
        <Navbar/>
          <Slider />
          <LowSection/>
        <Footer/>
    </div>
  )
}
