import Navbar from "../../Components/Nav/Navbar"
import { useQuery } from "@apollo/client";
import { GetEventDetails } from "../../queries/EventQueries";
import Router, { useRouter } from 'next/router'
import styles from "../../styles/Home.module.css";
import { useState } from "react";




const EventDetails = () => {
    const [event, setEvent] = useState('')
    const router = useRouter()
    const { id } = router.query
    const { data, loading, error } = useQuery(GetEventDetails, {
        variables: { id },
        onCompleted: (data) => {
            setEvent(data.event)
        }
    });
    
    return ( 
        <div>
            <Navbar/>
            <div className={styles.card}>
            <h3> {event.title} </h3>
            <p>{event.description}</p>
            <p>{event.price}</p>
            <p>{event.date}</p>
            <p><button onClick={()=>Router.push(`/Events/purchase?id=${id}`)}>Book Ticket</button></p>
          </div>
        </div>
     );
}
 
export default EventDetails;