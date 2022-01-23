import styled from "styled-components";
import { api } from "../../services/api";
import Router from 'next/router'
import { GetTicket, GetEvents } from "../../queries/EventQueries";
import { findUser } from "../../queries/UserQueries";
import { useState, useEffect, useContext } from "react";
import Navbar from "../../Components/Nav/Navbar";
import UserContext from '../../context/UserContext'
import { Container } from "../../Components/Global";
import FrontFlip from "../../Components/FrontFlip";
import Auth from "../../Components/Auth";

const Bookings = () => {

    const [tickets, setTicket] = useState(null)
    const user = useContext(UserContext)

    useEffect(() => {
        const request = async ({user}) => {
            await api.post('/', {
                query: GetTicket,
                variables: {
                    user: user
                }
            })
            .then(response => {
                const data = response.data.data
                if (data) {
                    setTicket(data.ticket)
                }
            })
        }
        const fetch = async() => {
            const response = await api.post('/', { query: findUser })
            const data = await response.data.data
            if (data && data.user){
                return request({user: data.user._id})
            }else {
                return Router.push("/User/Login")
            }
        }
        fetch()
        
    }, [user.userId.userId])

    if (tickets && tickets.length == 0){
        return <div><Navbar/><Container><p>No ticket found</p></Container></div>
    }

    return ( 
        <div>
            <Navbar/>
            <Container>
                {tickets && tickets.map((tickets) => (
                <Ticket key={tickets._id}>
                    {tickets.event ? 
                    <TicketInner>
                        <FrontFlip url={tickets.event.image}></FrontFlip>
                        <BackFlip>
                            <h1>{tickets.event.title}</h1>
                            <p>Ticket id: {tickets._id}</p>
                            <p>{tickets.user.username}</p>
                        </BackFlip>
                    </TicketInner>:
                    <TicketInner> No ticket found </TicketInner>
                    }
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