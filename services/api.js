import axios from "axios"

const BASE_URL = 'https://dvent.herokuapp.com/graphql'

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    withCredentials: true
  });


export { api }
