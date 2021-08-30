import React from 'react'
import Header from '../Components/Header';
import Cards from '../Components/Cards'
import { useWorldAPI } from '../hooks/useWorld'
import Loader from './Loader';



const Home = () => {
    const {state, error, loading} = useWorldAPI();

    if(loading) return <Loader />
    if(error) return <div>Sorry, Content is not fetched</div>

    return (
        <>
            <Header />
            <Cards data = {state}/>
        </>
    )
}

export default Home
