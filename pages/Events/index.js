import Navbar from "../../Components/Nav/Navbar";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { Container } from '../../Components/Global'
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { GetEvents } from "../../queries/EventQueries";


export const getStaticProps = async () => {
  const response = await api.post('/', { query: GetEvents })
  const data = await response.data.data
  const events = await data.events

  return {
    props: {events: events}
  }
}

export default function Event({events}) {
  
    if (!events) {
      return <Container><h2><a href="#loading" aria-hidden="true" className="aal_anchor" id="loading"></a>Loading...</h2></Container>;
    }

  return (
    <div>
      <Navbar/>
        <Container>
          <div className={styles.grid}>
            {events && events.map((event) => (
              <Link key={event._id} href={`/Events/${event._id}`}>
              <div  className={styles.card}>
                <img width={250} height={125} src={event.image}/>
                <h3><a aria-hidden="true" className="aal_anchor" id="country-name">{event.title}</a></h3>
                <p>
                  {event.date}
                </p>  
              </div>
              </Link>
            ))}
          </div>
        </Container>
    </div>
  )
}
