import { useState } from 'react';
import Navbar from '../Components/Nav/Navbar'
import { Container, Wrapper } from '../Components/Global'
import Slider from '../Components/Slider';

const config = [
  {
    title: 'Sporting Events',
    image: 'https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?cs=srgb&dl=pexels-sebastian-voortman-214574.jpg&fm=jpg'
  },
  {
    title: 'Live Concerts',
    image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?cs=srgb&dl=pexels-josh-sorenson-976866.jpg&fm=jpg'
  },
  {
    title: 'Art Conventions',
    image: 'https://images.pexels.com/photos/794212/pexels-photo-794212.jpeg?cs=srgb&dl=pexels-ralph-chang-794212.jpg&fm=jpg'
  },
]

export default function Home() {
  const [count, setCount] = useState(0)
  return (
    <div>
       <Navbar/>
          <Container>
            <Wrapper>
              <Slider config={config} />
            </Wrapper>
          </Container>
    </div>
  )
}
