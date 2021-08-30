import { useState, useEffect} from "react";
import { fetchAllCountriesHistory } from "../Tools/API";

export const useTotalHistory = function(){
    const [search, setSearch] = useState("")
    const [countries, setCountries] = useState([]);
    const [error, setError]  = useState(false);
    const [loading, setLoading]  = useState(true);



     const fetchingData = async function(search){
            try{ 
                setError(false)
                const dataRecieved = await fetchAllCountriesHistory(search);

               if(search.length > 0){
                    setCountries(
                    dataRecieved.timeline
                )
               } else{
                    setCountries(
                    dataRecieved
                )
               }

                setLoading(false)

            }catch(err){
                setError(true);
            }
     }

        useEffect(() => {
            fetchingData(search);
        },[search])

    return {countries, error, loading,search, setSearch};
}