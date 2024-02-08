import { useEffect, useRef, useState } from "react";
import client from "./axiosConfig";

const useAxios = (url, method, payload) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);
    const controllerRef = useRef(new AbortController());
    const cancel = () => {
      controllerRef.current.abort();
    };
  
    useEffect(() => {
      (async () => {
        try {
          const response = await client.request({
            data: payload,
            signal: controllerRef.current.signal,
            method,
            url,
          });
  
          setData(response.data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoaded(true);
        }
      })();
    }, [method, payload, url]);
  
    return { cancel, data, error, loaded };
  };
  export default useAxios;