import  {useState, useEffect}from 'react'
import { Container } from '../../GlobalStyles/Container'
import { useAllCountries } from '../../hooks/useAllCountries'
import CountryCard from '../CountryCard'
import { Content } from './CountryWise.styles'
import { Wrapper } from './CountryWise.styles'
import { formatNumbers } from '../../Tools/helpers'

const CountryWise = () => {

    const {state} = useAllCountries()
    const [select, setSelect] = useState('')
    const [country, setCountry] = useState([]);
    
    useEffect(() => {
        const x = state.filter(el => el.country === select)
        setCountry(x)
        
    }, [select])
    const handler = (e) => {
                   e.preventDefault()
                   setSelect(el => el[0].toUpperCase() + el.slice(1));      
    }
    
    
    return (
        <Container>
            <Wrapper>
           <div className="headerText">
               <h1>CountryWise Data</h1>
               <form onSubmit= {handler}>
                   <input className = "txt" type="text"
                    placeholder = "Country Name"
                    value = {select} onChange = {(e) => setSelect(e.target.value)}
                    />
                   <input className="btn" type="submit" placeholder = "Submit" 
                   />
               </form>
           </div>

           {
               country.length == 0 &&
               <Content>
                   <CountryCard  title = 'Please Enter Country Name. Remember It should start with a capital letter' />
               </Content>
           }
           {
               select && (country.length > 0) &&
               <>
           <h1
           style ={{position: 'relative'}}
           >{select} <img 
           style = {{width: '40px',
                        position: 'absolute',top : 0, marginLeft: '.4em'}}
           src={country[0].countryInfo.flag} alt="" /></h1>
           <Content>    
            < CountryCard title = 'total cases' 
            stats = {formatNumbers(country[0].cases)}
            />
            < CountryCard title = 'cases per million' 
            stats = {formatNumbers(country[0].casesPerOneMillion)} 
            />
            < CountryCard title = 'total Active cases' 
            stats = {formatNumbers(country[0].active)} 
            />
            < CountryCard title = 'active per million' 
            stats = {formatNumbers(country[0].activePerOneMillion)} 
            />
            < CountryCard title = 'total deaths' 
            stats = {formatNumbers(country[0].deaths)} 
            />
            < CountryCard title = 'deaths per million' 
            stats = {formatNumbers(country[0].deathsPerOneMillion)} 
            />
            < CountryCard title = 'total recovery' 
            stats = {formatNumbers(country[0].recovered)} 
            />
            < CountryCard title = 'recovery per million' 
            stats = {formatNumbers(country[0].recoveredPerOneMillion)} 
            />
            < CountryCard title = 'today cases' 
            stats = {formatNumbers(country[0].todayCases)}
            />
            < CountryCard title = 'today deaths' 
            stats = {formatNumbers(country[0].todayDeaths)}
            />
           </Content>
           
           
           </>
       
           }

           
        </Wrapper>
        </Container>
    )
}




export default CountryWise
