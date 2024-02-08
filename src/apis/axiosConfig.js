import axios from "axios";

const client = axios.create({
    baseURL: import.meta.env.VITE_DEV_API_URL,
  });


export default client;