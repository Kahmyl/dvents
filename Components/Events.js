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
      return <alert>{error.message}</alert>
    }
  
    const events = data.events
  
    return (
      <div className={styles.grid}>
        {events.map((event) => (
          <Link key={event._id} href={`/Events/${event._id}`}>
          <div  className={styles.card}>
            <img width={250} src={event.image}/>
            <h3><a aria-hidden="true" className="aal_anchor" id="country-name">{event.title}</a></h3>
            <p>
              {event.date}
            </p>  
          </div>
          </Link>
        ))}
      </div>
    );
}
