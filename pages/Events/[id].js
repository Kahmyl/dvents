import Navbar from "../../Components/Nav/Navbar"
import { useQuery, useMutation } from "@apollo/client";
import { GetEventDetails, Booking, CreateBooking } from "../../queries/EventQueries";
import Router, { useRouter } from 'next/router'
import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import UserContext from '../../context/UserContext'
import { Card, Container } from "../../Components/Global";




const EventDetails = () => {
    const [event, setEvent] = useState('')
    const [toggle, setToggle] = useState(false)
    const [creator, setCreator] = useState('boll')
    const router = useRouter()
    const { id } = router.query
    const user = useContext(UserContext)
    const { data, loading, error } = useQuery(GetEventDetails, {
        variables: { 
            id : id
        },
    });

    const [BookEvents] = useMutation(CreateBooking, {
        onCompleted: (data) => {
            Router.push('/Events/Bookings')
        }
    })

    const {  } = useQuery(Booking, {
        variables: { 
            user: user.userId.userId,
            event: id
        },
        onCompleted: (data) => {
           if(data.booking){
             setToggle(true)
           }
           
        }
    });

    useEffect(() => {
        if(data){
            setEvent(data.event)
            if(data.event.user){
                setCreator(data.event.user._id)
            }
        }
        
    }, [data])

    const handleBook = () => {
        if (user.userId.userId){
            BookEvents({
                variables: {
                  event: id,
                  user: user.userId.userId
                }
            })
        }else{
            Router.push('/User/Login')
        }
        
    }

    if (loading) {
        return <Container><h2><a href="#loading" aria-hidden="true" className="aal_anchor" id="loading"></a>Loading...</h2></Container>;
    }

    
    return ( 
        <div>
            <Navbar/>
            <Container>
            <Card>
            <EventImage  src={event.image}/>
            <h3> {event.title} </h3>
            <p>{event.description}</p>
            <p>₦{event.price}</p>
            <p>{event.date}</p>
            {!toggle && user.userId.userId !== creator ? <p><TicketPlate onClick={handleBook}>Book Ticket</TicketPlate></p>: ''}
            {toggle && <p><TicketPlate disabled={true}>Ticket Acquired</TicketPlate></p>}
            {user.userId.userId === creator && <p><TicketPlate disabled={true}>Created By Me</TicketPlate></p>}
            </Card>
            </Container>
        </div>
     );
}
 
export default EventDetails;

export const TicketPlate = styled.button`
display: inline-block;
cursor: pointer;
font-weight: 800;
color: #212529;
text-align: center;
vertical-align: middle;
background-color: transparent;
border: 1px solid transparent;
padding: 0.395rem 0.75rem;
font-size: 0.9rem;
line-height: 1.6;
border-radius: 0.25rem;
transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
color: #fff;
background-color: #3490dc;
border-color: #3490dc;
&:hover{
    cursor: pointer;
    color: #fff;
    background-color: #227dc7;
    border-color: #2176bd;
}
&:focus{
    cursor: pointer;
    color: #fff;
    background-color: #227dc7;
    border-color: #2176bd;
    box-shadow: 0 0 0 0.2rem rgba(82, 161, 225, 0.5);
}
`

export const EventImage = styled.img`
border-top-left-radius: 10px;
border-top-right-radius: 10px;
width: 100%;
display: inline-block;
vertical-align: middle;
`