import '../styles/globals.css'
import axios from "axios"
import { ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client";
import { useState, useEffect } from 'react';
import UserContext from '../context/UserContext';
import Head from 'next/head'

const client = new ApolloClient({
  uri: 'https://dvent.herokuapp.com/graphql/',
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {
  const [token, setToken] = useState('')
  const [userId, setUserId] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  
  useEffect(() => {
    axios.get('/api/user')
      .then(response => {
        setUserId(response.data.userId)
        setUsername(response.data.username)
      })
  })

  return (
    <UserContext.Provider
      value={{
        token:{token,setToken}, 
        userId:{userId, setUserId}, 
        email:{email, setEmail}, 
        username:{username, setUsername}
      }}>
      <Head>
        <title>Dvent</title>
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </UserContext.Provider>
  );
}

export default MyApp
