import Navbar from "../../Components/Nav/Navbar";
import ClientOnly from "../../components/ClientOnly";
import Events from '../../components/Events';

export default function Home() {
  return (
    <div>
       <Navbar/>
       <ClientOnly>
         <Events />
       </ClientOnly>
    </div>
  )
}
