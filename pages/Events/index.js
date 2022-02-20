import Navbar from "../../Components/Nav/Navbar";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { Container } from '../../Components/Global'
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { GetEvents } from "../../queries/EventQueries";
import Footer from "../../Components/Footer";
import {FaSortAmountDownAlt, FaSortDown, FaSearch} from 'react-icons/fa'


// export const getStaticProps = async () => {
//   const response = await api.post('/', { query: GetEvents })
//   const data = await response.data.data
//   const events = await data.events

//   return {
//     props: {events: events}
//   }
// }

export default function Event() {
    
    const [events, setEvents] = useState(null)

    useEffect(() => {
      const request = async () => {
        const response = await api.post('/', { query: GetEvents })
        const data = await response.data.data
        if (data) {
          await setEvents(data.events)
        }
      }
      request()
    }, []);
  
    if (!events) {
      return <div><Navbar/><Container><h2 className={styles.loading}><a href="#loading" aria-hidden="true" className="aal_anchor" id="loading"></a>Loading...</h2></Container></div>;
    }

  return (
    <div>
      <Navbar/>
        <Container>
          <div className={styles.filter_group}>
              <div className={styles.filter_button}>
                  <button className={styles.all_time}><FaSortDown className={styles.edit_filter}/><span className={styles.text_filter}>Sort</span></button>
                  <button className={styles.more}><FaSortAmountDownAlt className={styles.edit_filter}/><span className={styles.edit_text}>Filter</span></button>
              </div>
              <div className={styles.filter_search}>
                 <FaSearch className={styles.filter_place}/>
                 <input className={styles.filter_searchbox} placeholder="Search" type="search"/>
              </div>
          </div>
          <div className={styles.grid}>
            {events && events.map((event) => (
              <Link key={event._id} href={`/Events/${event._id}`}>
              <div  className={styles.card}>
                <img className={styles.card_img} src={event.image}/>
                <h2><a aria-hidden="true" className="aal_anchor" id="country-name">{event.title}</a></h2>
                <p className={styles.card_price}>
                   ${event.price}
                </p>
                <button className={styles.card_button}>Event Details</button>  
              </div>
              </Link>
            ))}
          </div>
        </Container>
      <Footer/>
    </div>
  )
}
