import React, { useEffect, useState } from 'react'

const PickBar = ({setSearch}) => {
    const [name, setName] = useState([])
    const [value, setvalue] = useState('')

    useEffect(() => {
        setSearch(value)
    },[value,setSearch])
    
    const fetchCountries = async function(){
        try{
            const fetchingData = await fetch('https://disease.sh/v3/covid-19/apple/countries')
            const response = await fetchingData.json();
            
            setName([...response])
        }
        catch(err){
            console.log(err.message)
        }
    }

    useEffect(() => {
        fetchCountries();
        
    },[])
    return (
        <select placeholder = "Country" value = {value} onChange = {(e) => {
            setvalue(e.target.value)
        }}>
            <option></option>
            {name.map(el => {
                return (
                    <option key= {Math.random()*100000}>{el}</option>
                )
            })}
        </select>
    )
}

export default PickBar
