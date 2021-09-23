import  {useRef,useState ,useEffect}from 'react'
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
    const [final,setFinal] = useState("")

    useEffect(() => {
        if(!select) return 
        else if(select === 'USA' || select === 'usa') setFinal('USA')
        else if(select === 'UK' || select === 'uk') setFinal('UK')
        else setFinal(select.toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '))
    }, [select])

    const handler = (e) => {
        e.preventDefault()
        
       functionGetdata(final)
    }

    const functionGetdata = (cn) => {
     setCountry(state.filter(el => el.country === cn))
    
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
               !select && 
               <Content style = {{display: 'flex', justifyContent: 'center'}}>
                   <CountryCard title = 'Please Enter Country Name. Remember It should start with a capital letter'
                   swipeAvail = {false}
                   ></CountryCard>
               </Content>
           }
           {
               select && country.length === 0 &&
               <Content style = {{display: 'flex', justifyContent: 'center'}}>
                   <CountryCard title = 'Wrong Country Name, for USA, UK each letter is capital, and countries having two words in their name,capitalize each word.' 
                   swipeAvail = {false}
                   ></CountryCard>
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
            swipeAvail = {true}
            />
            < CountryCard title = 'cases per million' 
            stats = {formatNumbers(country[0].casesPerOneMillion)} 
            swipeAvail = {true}
            />
            < CountryCard title = 'total Active cases' 
            stats = {formatNumbers(country[0].active)} 
            swipeAvail = {true}
            />
            < CountryCard title = 'active per million' 
            stats = {formatNumbers(country[0].activePerOneMillion)} 
            swipeAvail = {true}
            />
            < CountryCard title = 'total deaths' 
            stats = {formatNumbers(country[0].deaths)} 
            swipeAvail = {true}
            />
            < CountryCard title = 'deaths per million' 
            stats = {formatNumbers(country[0].deathsPerOneMillion)} 
            swipeAvail = {true}
            />
            < CountryCard title = 'total recovery' 
            stats = {formatNumbers(country[0].recovered)} 
            swipeAvail = {true}
            />
            < CountryCard title = 'recovery per million' 
            stats = {formatNumbers(country[0].recoveredPerOneMillion)} 
            swipeAvail = {true}
            />
            < CountryCard title = 'today cases' 
            stats = {formatNumbers(country[0].todayCases)}
            swipeAvail = {true}
            />
            < CountryCard title = 'today deaths' 
            stats = {formatNumbers(country[0].todayDeaths)}
            swipeAvail = {false}
            />
           </Content>
           
           
           </>
       
           }

           
        </Wrapper>
        </Container>
    )
}




export default CountryWise
