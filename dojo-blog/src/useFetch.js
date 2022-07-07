import { useEffect,useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setPending]=useState(true);
    const [error,setError]=useState(null);

    useEffect(() => {
        fetch(url)
          .then((res) => {
            if(!res.ok){
              throw Error("Attempt to fetch data failed!");
            }
            return res.json();
          })
          .then((response_data) => {
            setData(response_data);
            setPending(false);
            setError(null);
          })
          .catch(err=>{
            setError(err.message);
            setPending(false);
          });
      }, [url]);

      return {data, isPending, error}
}
 
export default useFetch;