import Navbar from "../../Components/Nav/Navbar"
import { api } from "../../services/api";
import { GetEventDetails, Booking, CreateBooking, GetEvents } from "../../queries/EventQueries";
import { findUser } from "../../queries/UserQueries";
import Router, { useRouter } from 'next/router'
import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import UserContext from '../../context/UserContext'
import { Card, Container, Des } from "../../Components/Global";
import Footer from "../../Components/Footer";

// export const getStaticPaths = async () => {
//     const response = await api.post('/', { query: GetEvents })
//     const data = await response.data.data
//     const events = await data.events
//     const paths = events.map(event => {
//       return{
//           params: {id: event._id.toString()}
//       }
//     })

//     return{
//         paths,
//         fallback: false
//     }
// }

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const response = await api.post('/', {
    query: GetEventDetails,
    variables:{
        id : id
    }
  })
  const data = await response.data.data
  const event = data.event

  
  return {
    props: {
        event: event,
        id: id
    }
  }
}



const EventDetails = ({event, id}) => {
    const user = useContext(UserContext)
    const [toggle, setToggle] = useState(false)
    const [userID, setUserID] = useState('')

    useEffect(() => {
        const fetch = async() => {
            const response = await api.post('/', { query: findUser })
            const data = await response.data.data
            if (data && data.user){
                setUserID(data.user._id)
            }
        }
        fetch()
      
        const request = async () => {
            await api.post('/', {
                query: Booking,
                variables:{
                    event : id,
                    user: userID
                }
            })
            .then(response => {
                const data = response.data.data
                if (data && data.booking){
                    setToggle(true)
                }
            })
        }
        request()
    }, [userID]);

    const handleBook = async () => {
        if (userID){
            await api.post('/', {
                query: CreateBooking,
                variables:{
                    event: id,
                    user: userID
                }
            })
            .then(response => {
                Router.push('/Events/Bookings')
            })
        }else{
            Router.push('/User/Login')
        }
        
    }

    if (!event) {
        return <Container><h2><a href="#loading" aria-hidden="true" className="aal_anchor" id="loading"></a>Loading...</h2></Container>;
    }

    
    return ( 
        <div>
            <Navbar/>
            <Container>
            <Card>
            <EventImage  src={event.image}/>
            <CardBody>
              <Tag>₦{event.price}</Tag>
              <h3> {event.title} </h3>
              <p>{event.description}</p>
              <Date>
                <p className="desc">Event Date:</p>
                <p className="action">{event.date}</p>
              </Date>
  
              { userID !== event.user._id && !toggle
              ? 
              <p><TicketPlate onClick={handleBook}>Book Ticket</TicketPlate></p>
              : ''}
  
              {userID === event.user._id 
              && 
              <p><TicketPlate disabled={true}>Created By Me</TicketPlate></p>}
              {toggle && <p><TicketPlate disabled={true}>Ticket acquired</TicketPlate></p>}
            </CardBody>
            </Card>
            </Container>
            <Footer/>
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
`;

export const EventImage = styled.img`
width: 100%;
height: 300px;
object-fit: cover;
`;

export const CardBody = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 20px;
min-height: 250px;
p {
    font-size: 14px;
    margin: 0 0 40px;
}
`

export const Tag = styled.span`
  border-radius: 50px;
  font-size: 18px;
  margin: 0;
  padding: 2px 10px;
  text-transform: uppercase;
  cursor: pointer;
  background: whitesmoke;
  font-weight: 800;
`
export const Date = styled.div`
display: flex;
align-items: center;
.desc{
    padding-right: 5px;
}
.action{
    padding-left: 5px;
}
`
