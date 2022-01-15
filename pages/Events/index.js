import Navbar from "../../Components/Nav/Navbar";
import ClientOnly from "../../components/ClientOnly";
import Events from '../../components/Events';
import { Container } from '../../Components/Global'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <ClientOnly>
        <Container>
          <Events />
        </Container>
      </ClientOnly>
    </div>
  )
}
