import React from 'react'
import { useEffect, useState } from 'react'

import { fetchAllCountries } from '../Tools/API';

export const useAllCountries = () => {
    const [state, setState] = useState([]);
    const [fetchError, setFetchError] = useState(false);
    const [fetchLoad, setFetchLoad] = useState(true)

    useEffect(() => {
        
        const fetchingCountries = async function(){
            try{
                setFetchError(false);
                
                const fetchData = await fetchAllCountries();

                setState(
                    [...fetchData]
                )

            }catch(err){
                console.error(err);
                setFetchError(true)
            }
            

        }

        fetchingCountries();
    },[])

    return {state, fetchError, fetchLoad};
}

