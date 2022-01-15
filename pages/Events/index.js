import Navbar from "../../Components/Nav/Navbar";
import Events from '../../components/Events.js';
import { Container } from '../../Components/Global'

export default function Home() {
  return (
    <div>
      <Navbar/>
        <Container>
          <Events />
        </Container>
    </div>
  )
}
