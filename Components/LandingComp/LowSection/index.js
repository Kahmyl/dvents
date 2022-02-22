import { Row, Container } from "../../Global";
import styled from 'styled-components'
import { MdEvent } from "react-icons/md";
import { IoLocationSharp} from "react-icons/io5";

const LowSection = () => {
    return ( 
        <Section>
            <Container>
                <Grid>
                   <Left>
                       <SecContent>
                          <Title>
                            <h2>The Biggest Digital Conference.</h2>
                          </Title>
                          <p>There arge many variations ohf passages of sorem gpsum ilable, but the majority have suffered alteration in some form, by ected humour, or randomised words whi.rere arge many variations ohf passages of sorem gpsum ilable.</p>
                       </SecContent>
                       <Row>
                           <Col>
                               <SingleCaption>
                                   <CapIcon>
                                      <Venue/>
                                   </CapIcon>
                                   <Caption>
                                     <h5>Where</h5>
                                     <p>New York, United States</p>
                                   </Caption>
                               </SingleCaption>
                           </Col>
                           <Col>
                               <SingleCaption2>
                                   <CapIcon>
                                      <Time/>
                                   </CapIcon>
                                   <Caption>
                                     <h5>When</h5>
                                     <p><p>Mar. 21. 2022</p></p>
                                   </Caption>
                               </SingleCaption2>
                           </Col>
                       </Row>
                       <Button>Get your Ticket</Button>
                   </Left>
                   <Right>
                      <SecImages>
                          <SmallImg>
                            <ImgPad>
                              <img src="https://images.pexels.com/photos/1190295/pexels-photo-1190295.jpeg" alt=""/>
                            </ImgPad>
                          </SmallImg>
                          <LargeImg>
                            <img src="https://images.pexels.com/photos/3025096/pexels-photo-3025096.jpeg" alt=""/>
                          </LargeImg>
                      </SecImages>
                   </Right>
                </Grid>
            </Container>
        </Section>
     );
}
 
export default LowSection;


const Section = styled.div`
position: relative;
padding-top: 6rem;
padding-bottom: 6rem;
`

const Grid = styled.div`
display: grid;
grid-gap: 30px ;
grid-template-columns: repeat(2, 1fr);
`

const Left = styled.div`
`

const Right = styled.div`
`

const SecContent = styled.div`
margin-bottom: 50px;
p{
    font-size: 16px;
    color: #64676c;
    line-height: 1.6;
    margin-bottom: 43px;
    padding-right: 50px;
}
}
`

const Title = styled.div`
margin-bottom: 35px;
h2{
    font-size: 49px;
    display: block;
    color: #26264b;
    font-weight: 700;
    margin-bottom: 17px;
    line-height: 1.3;
    margin-bottom: 30px;
}
`

const Col = styled.div`
max-width: 50%;
`

const SingleCaption = styled.div`
display: flex;
text align: left;
align-items: center;
`
const SingleCaption2 = styled.div`
display: flex;
text align: left;
align-items: center;
margin-left:50px;
`

const Caption = styled.div`
padding-left: 20px;
h5{
    color: #26264b;
    font-size: 20px;
    font-weight: 500;
}
p{
    color: #7f8192;
    font-size: 14px;
    margin-bottom: 0;
    display: block;
    line-height: 1.7;
}
`

const CapIcon = styled.div`
`

const Time = styled(MdEvent)`
color: #212025;
font-size: 35px;
margin-bottom: 0;
display: block;;
`

const Venue = styled(IoLocationSharp)`
color: #212025;
font-size: 35px;
margin-bottom: 0;
display: block;
`

const Button = styled.button`
    background: #000;
    padding: 27px 44px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    border-radius: 0;
    -moz-user-select: none;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 0;
    margin-bottom: 0;
    transition: color .4s linear;
    position: relative;
    z-index: 1;
    border-radius: 4px;
    border: 0;
    overflow: hidden;
    margin-top: 3rem;
    &:hover{
        background: gold;
    }
`

const SecImages = styled.div`
`

const SmallImg = styled.div`
    position: absolute;
    width: 300px;
    height: 574px;
    z-index: 1;
    
`

const ImgPad = styled.div`
width: 290px;
height: 240px;
padding: 20px;
background: #fff;
margin-top:334px;
img{
    vertical-align: middle;
    border-style: none;
    width: 100%;
    height: 200px;
}
`

const LargeImg = styled.div`
    position: absolute;
    right: 0;
    z-index: 0;
    height: 550px;
    max-width: 574px;
    img{
        vertical-align: middle;
        border-style: none;
        max-width: 100%;
        height: 100%;
        margin-top: 1.5rem;
    }
`