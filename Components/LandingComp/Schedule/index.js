import styled from 'styled-components'
import { Row, Container } from "../../Global";

const Schedule = () => {
    return ( 
        <Section>
            <Container>
                <SectionRow>
                    <ColText>
                        <MainText>
                            <h2>Event Schedule</h2>
                            <p>There arge many variations ohf passages of sorem gp ilable, but the majority have ssorem gp iluffe.</p>
                        </MainText>
                    </ColText>
                </SectionRow>
            </Container>
            <Container>
                <BoxRow>
                    <Col3>
                        <Props>
                            <Bars>
                                <Tabs>
                                    <SingleTabActive>Day-01</SingleTabActive>
                                    <SingleTab>Day-02</SingleTab>
                                    <SingleTab>Day-03</SingleTab>
                                    <SingleTab>Day-04</SingleTab>
                                </Tabs>
                            </Bars>
                        </Props>
                    </Col3>
                </BoxRow>
            </Container>
            <Container>
                <TabContent>
                    <TabFade>
                        <Row>
                            <AccWrapper>
                               <Accordion>
                                   <AccCard>
                                       <CardHeader>
                                           <h2>
                                              <HeadContent>
                                                  <span>8:30 - 9:30</span>
                                                  <p>Snack</p>
                                              </HeadContent>
                                           </h2>
                                       </CardHeader>
                                   </AccCard>
                                   <AccCard>
                                       <CardHeader>
                                           <h2>
                                              <HeadContent>
                                                  <span>8:30 - 9:30</span>
                                                  <p>Snack</p>
                                              </HeadContent>
                                           </h2>
                                       </CardHeader>
                                   </AccCard>
                                   <AccCard>
                                       <CardHeader>
                                           <h2>
                                              <HeadContent>
                                                  <span>8:30 - 9:30</span>
                                                  <p>Snack</p>
                                              </HeadContent>
                                           </h2>
                                       </CardHeader>
                                   </AccCard>
                               </Accordion>
                            </AccWrapper>
                        </Row>
                    </TabFade>
                </TabContent>
            </Container>
        </Section> 
    );
}


export default Schedule;

const Section = styled.section`
    padding-top: 55px;
    padding-bottom: 40px;
    overflow: hidden;
    display: block;
    box-sizing: border-box;

`

const SectionRow = styled.div`
    display: -ms-flexbox;
    display: flex;
    justify-content: center!important;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`

const BoxRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`

const ColText = styled.div`
    max-width: 500px;
    padding: 0px 15px;
`

const MainText = styled.div`
margin-bottom : 80px;
text-align: center;
h2{
    font-size: 49px;
    display: block;
    color: #000;
    font-weight: 700;
    margin-bottom: 17px;
    line-height: 1.3;
    margin-bottom: 30px;
}
p{
    color: gray;
    margin-bottom: 30px;
    color: #10285d;
    font-size: 16px;
    line-height: 30px;
    margin-bottom: 15px;
    font-weight: normal;
}
`

const Col3 = styled.div`
padding: 0px 15px;
`

const Props = styled.div`
margin-bottom: 40px;
`

const Bars = styled.nav`
display: block;
`

const Tabs = styled.div`
    margin-bottom: 15px;
    padding-bottom: 0;
    position: relative;
    border: 0;
    display: flex;
    justify-content: center;
    justify-content: space-between;
    background: #f5f3f9;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-left: 0;
    list-style: none;
}
`

const SingleTab = styled.div`
    .active{
        background: #331391;
        color: #fff; 
        transition: all 0s ease-out 0s;   
    }
    display: block;
    color: #000;
    font-size: 24px;
    font-weight: 700;
    position: relative;
    background: transparent;
    padding: 33px 88px;
    border-radius: 0;
    border: 0;
`

const SingleTabActive = styled.div`
    display: block;
    font-size: 24px;
    font-weight: 700;
    position: relative;
    background: transparent;
    padding: 33px 88px;
    border-radius: 0;
    border: 0;
    background: #000;
    color: #fff; 
    transition: all 0s ease-out 0s; 
`
const TabContent = styled.div`
width: 100%;

`
const TabFade = styled.div`
width: 100%;
`

const AccWrapper = styled.div`
background: #fff;
width: 100%;
`
const Accordion = styled.div`
width: 100%;
`

const AccCard = styled.div`
background: #fff;
padding: 0px 40px 20px 20px;
position: relative;
display: -ms-flexbox;
width:100%
display: flex;
-ms-flex-direction: column;
flex-direction: column;
min-width: 0;
word-wrap: break-word;
background-color: #fff;
background-clip: border-box;
border-radius: 0.25rem;
`

const CardHeader = styled.div`
    padding: 0;
    border-radius: 0;
    background: none;
    border: 0;
    padding: 0rem 1.25rem;
    margin-bottom: 0;
    border-bottom: 1px solid rgba(0,0,0,.125);
    h2{
        margin-bottom: 0;
    }
`

const HeadContent = styled.div`
color: #222;
font-size: 16px;
font-weight: 500;
padding: 0px 30px 0px 0;
display: block;
text-decoration: none;
border: 0;
line-height: 1.5;
span{
    color: #000;
    font-size: 16px;
    font-weight: 800;
}
p{
    color: gray;
    font-size: 16px;
    line-height: 30px;
    margin-bottom: 15px;
    font-weight: normal;
}
`

