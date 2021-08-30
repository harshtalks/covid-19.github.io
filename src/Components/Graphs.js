import React  from 'react'
import { Container } from '../GlobalStyles/Container';
import { useTotalHistory } from '../hooks/useTotalData'
import Graph from './GraphCases';
import GraphDeath from './GraphDeaths';
import GraphRec from './GraphRec';
import Loader from './Loader';


const Graphs = () => {
    const { countries, error, loading,setSearch} = useTotalHistory() 

    
    if(loading) return <Loader />
    if(error) {return (<Container>
        <div>NO data Found</div>
    </Container>)}  

    
    return (
       <div>
        
       <Graph countries = {countries} setSearch = {setSearch} />
       <div style = {{
           margin: '4em' ,
       }}></div>
       <GraphDeath countries = {countries} />
       <div style = {{
           margin: '4em' ,
       }}></div>
       <GraphRec countries = {countries} />
       </div>

    )
}

export default Graphs
