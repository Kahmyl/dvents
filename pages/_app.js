import '../styles/globals.css'
import axios from "axios"
import { useState, useEffect } from 'react';
import UserContext from '../context/UserContext';
import ErrorContext from '../context/ErrorContext';
import Head from 'next/head'
import { api } from '../services/api';
import { findUser } from '../queries/UserQueries';


function MyApp({ Component, pageProps }) {
  const [token, setToken] = useState('')
  const [userId, setUserId] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [errorAuth, setErrorAuth] = useState('')

  useEffect(() => {
    const request = async () => {
      const response = await api.post('/', { query: findUser })
      const data = await response.data.data
      if (data.user){
        await setUsername(data.user.username)
        await setUserId(data.user._id)
      }
    }
    request()
  }, []);
  
  
  return (
    <UserContext.Provider
      value={{
        token:{token,setToken}, 
        userId:{userId, setUserId}, 
        email:{email, setEmail}, 
        username:{username, setUsername}
      }}>
      <ErrorContext.Provider
        value={{errorAuth, setErrorAuth}}
      >
        <Head>
          <title>Dvent</title>
        </Head>
        <Component {...pageProps} />
      </ErrorContext.Provider>
    </UserContext.Provider>
  );
}

export default MyApp
