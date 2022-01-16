import { useState } from 'react';
import Navbar from '../Components/Nav/Navbar'
import { Container, Wrapper } from '../Components/Global'
import Slider from '../Components/Slider';


export default function Home() {
  const [count, setCount] = useState(0)
  return (
    <div>
       <Navbar/>
          <Container>
            <Wrapper>
              <Slider />
            </Wrapper>
          </Container>
    </div>
  )
}
