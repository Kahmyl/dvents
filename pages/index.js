import Navbar from '../Components/Nav/Navbar'
import ClientOnly from "../components/ClientOnly";
import Users from '../components/Users';

export default function Home() {
  return (
    <div>
       <Navbar/>
       <ClientOnly>
         <Users />
       </ClientOnly>
    </div>
  )
}
