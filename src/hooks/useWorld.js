import { useState, useEffect} from "react";
import { fetchWorldWide } from "../Tools/API";

export const useWorldAPI = function(){

    const [state, setState] = useState({});
    const [error, setError]  = useState(false);
    const [loading, setLoading]  = useState(true);

    //use EFFect api

    useEffect( () => {
        const fetchingData = async function(){
            try{
            
                setError(false)
                const dataRecieved = await fetchWorldWide();
                
                setState(
                    {
                        ...dataRecieved
                    }
                )

                setLoading(false)

            }catch(err){
                setError(true);
            }
        }

        fetchingData();
    },[] )

    return {state, error, loading};
}