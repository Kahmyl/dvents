import { useState } from "react";
import { Image, NavButton, SlideWrapper } from "../Global";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider = ({config}) => {
    const [imageIndex, setImageIndex] = useState(0)
    return ( 
        <Carousel autoPlay={true} emulateTouch={true} infiniteLoop={true}>
          {config.map(item =>(
            <SlideWrapper>
              <Image src={item.image}/>
              <h2 className="legend">{item.title}</h2>
            </SlideWrapper>
          ))}
        </Carousel>
     );
}

 
export default Slider;