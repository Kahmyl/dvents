import Link from "next/link";
import { useQuery } from "@apollo/client";
import styles from "../styles/Home.module.css";
import { GetEvents } from "../queries/EventQueries";
import Router from 'next/router'

export default function Events() {

    const { data, loading, error } = useQuery(GetEvents);


    if (loading) {
      return <h2><a href="#loading" aria-hidden="true" className="aal_anchor" id="loading"></a>Loading...</h2>;
    }
  
    if (error) {
      console.error(error);
      return <alert>Error, Data timeout, check your network connection</alert>
    }
  
    const events = data.events
  
    return (
      <div className={styles.grid}>
        {events.map((event) => (
          <div key={event._id} className={styles.card}>
            <h3><Link href={`/Events/${event._id}`}><a aria-hidden="true" className="aal_anchor" id="country-name">{event.title}</a></Link></h3>
            <p>
              {event.date}
            </p>
            <p><button onClick={()=>Router.push(`/Events/${event._id}`)}>Details</button><button onClick={()=>Router.push(`/Events/purchase?id=${event._id}`)}>Book Ticket</button></p>
          </div>
        ))}
      </div>
    );
}
