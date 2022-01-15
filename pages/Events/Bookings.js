import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { GetTicket } from "../../queries/EventQueries";
import { useState, useEffect, useContext } from "react";
import Navbar from "../../Components/Nav/Navbar";
import UserContext from '../../context/UserContext'
import { Container } from "../../Components/Global";
import FrontFlip from "../../Components/FrontFlip";
const Bookings = () => {

    const [tickets, setTicket] = useState(null)
    const user = useContext(UserContext)
    const { data, loading, error } = useQuery(GetTicket,  {
        retry: true,
        variables: { 
            user : user.userId.userId
        },
    });

    useEffect(() => {
        if(data){
            setTicket(data.ticket)
        }
        
    }, [data])
    if (loading) {
        return <Container><h2><a href="#loading" aria-hidden="true" className="aal_anchor" id="loading"></a>Loading...</h2></Container>;
    }
    return ( 
        <div>
            <Navbar/>
            <Container>
                {/* {))} */}
                {tickets && tickets.map((tickets) => (
                <Ticket key={tickets._id}>
                    <TicketInner>
                        <FrontFlip url={tickets.event.image}></FrontFlip>
                        <BackFlip>
                            <h1>{tickets.event.title}</h1>
                            <p>Ticket id: {tickets._id}</p>
                            <p>{tickets.user.username}</p>
                          </BackFlip>
                    </TicketInner>
                </Ticket>
                ))}
                
            </Container>
        </div>
     );
}
 
export default Bookings;

export const TicketInner = styled.div`
osition: relative;
width: 100%;
height: 100%;
text-align: center;
transition: transform 0.8s;
transform-style: preserve-3d;
`

export const Ticket = styled.div`
margin-top: 30px;
background-color: transparent;
width: 450px;
height: 200px;
border: 1px solid #f1f1f1;
perspective: 1000px;
&:hover ${TicketInner}:hover {
    transform: rotateY(180deg)
}
`



export const BackFlip = styled.div`
position: absolute;
width: 100%;
height: 100%;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
background-color: dodgerblue;
color: white;
transform: rotateY(180deg)
`