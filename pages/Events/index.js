import Navbar from "../../Components/Nav/Navbar";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import styles from "../../styles/Home.module.css";
import { GetEvents } from "../../queries/EventQueries";
import { Container } from '../../Components/Global'

export default function Home() {
  const { data, loading, error } = useQuery(GetEvents);


    if (loading) {
      return <Container><h2><a href="#loading" aria-hidden="true" className="aal_anchor" id="loading"></a>Loading...</h2></Container>;
    }
  
    if (error) {
      console.error(error);
      return <Container><alert>{error.message}</alert></Container>
    }
  
    const events = data.events

  return (
    <div>
      <Navbar/>
        <Container>
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
        </Container>
    </div>
  )
}
