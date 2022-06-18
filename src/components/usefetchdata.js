import {useState, useEffect} from 'react';

// data fetching hook
// it returns error, loading and data variables.
const useFetchData = (query) => {

    const [data, setData] = useState(null);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    

    useEffect(() => {

        const fetchData = () => {
            setIsLoading(true);
            fetch(query)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(error => setIsError(true))
            .finally(() => setIsLoading(false));
        }

        fetchData();

        
    },[query])

    return(
        {data, isError, isLoading}
    )
    
}
export default useFetchData;