import { Image, SlideWrapper, Container } from "../Global";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components'

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

const Slider = () => {

    return ( 
            <SlideWrapper>
              <DeckList>
                <DeckTrack>
                  <DeckSlider  data-slick-index="0" aria-hidden="false" tabindex="0" >
                    <Container>
                      <Row>
                        <Caption>
                           <div>
                             <Span data-animation="fadeInLeft" data-delay=".1s">Committed to success</Span>
                             <H1 data-animation="fadeInLeft" data-delay=".5s">Digital Conference For Designers</H1>
                           </div>
                           <Button data-animation="fadeInLeft" data-delay="1.0s" tabindex="-1">Book Ticket</Button>
                        </Caption>
                      </Row>
                    </Container>
                  </DeckSlider>
                </DeckTrack>
              </DeckList>
            </SlideWrapper>

        // <Carousel showThumbs={false} autoPlay={true} emulateTouch={true} infiniteLoop={true}>
        // {config && config.map(item =>(
        //   <SlideWrapper key={item.title}>
        //     <Image  src={item.image}/>
        //     <h2 className="legend">{item.title}</h2>
        //   </SlideWrapper>
        // ))}
        // </Carousel>
  );
}



 
export default Slider;

const DeckList = styled.div`
position: relative;
display: block;
overflow: hidden;
margin: 0;
padding: 0;
`

const DeckTrack = styled.div`
position: relative;
top: 0;
left: 0;
display: block;
margin-left: auto;
margin-right: auto;
`

const DeckSlider = styled.div`
width: 100%;
position: relative;
left: 0;
top: 0px;
z-index: 2;
opacity: 1;
height: 900px;
display: flex;
float left
align-items: center;
`

const Row = styled.div`
margin-top: 10rem;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
margin-right: -15px;
margin-left: -15px;
`

const Caption = styled.div`
width: 70%;
`

const Span = styled.span`
    font-size: 20px;
    font-family: Nunito;
    font-weight: 900;
    text-transform: uppercase;
    color: 	#fff;
    display: inline-block;
    position: relative;
    padding-left: 100px;
    letter-spacing: 0.05em;
    animation-delay: 0.1s;
    &::before {
      position: absolute;
      content: "";
      width: 70px;
      height: 2px;
      background: #fff;
      top: 0;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
    }
  `

  const H1 = styled.h1`
    animation-delay: 0.5s;
    font-size: 75px;
    font-weight: 800;
    margin-bottom: 14px;
    color: #fff;
    line-height: 1.2;
  `

  const Button = styled.button`
  animation-delay: 1s;
  cursor: pointer;
  padding: 29px 39px;
  background: #000;
  color: #fff  !important;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  -moz-user-select: none;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 0;
  margin-bottom: 0;
  transition: color 0.4s linear;
  position: relative;
  z-index: 1;
  border: 0;
  overflow: hidden;
  margin: 0;

&:hover{
  background: gold;
  animation-delay: 0.5s ;
}
  `