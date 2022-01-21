import { useContext } from 'react';
import { useQuery } from "@apollo/client";
import Navbar from '../Components/Nav/Navbar'
import UserContext from '../context/UserContext'
import { Container, Wrapper } from '../Components/Global'
import Slider from '../Components/Slider';
import { findUser } from "../queries/UserQueries";


export default function Home() {

  const user = useContext(UserContext)

  
  
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
