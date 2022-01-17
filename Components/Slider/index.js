import { Image, SlideWrapper } from "../Global";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
        <Carousel showThumbs={false} autoPlay={true} emulateTouch={true} infiniteLoop={true}>
          {config && config.map(item =>(
            <SlideWrapper key={item.title}>
              <Image  src={item.image}/>
              <h2 className="legend">{item.title}</h2>
            </SlideWrapper>
          ))}
        </Carousel>
     );
}

 
export default Slider;