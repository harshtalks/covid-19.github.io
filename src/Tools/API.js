
const API_URL_ALL = 'https://disease.sh/v3/covid-19/all'
const API_URL_COUNTRIES = 'https://disease.sh/v3/covid-19/countries'
const API_URL_HISTORY_ALL = 'https://disease.sh/v3/covid-19/historical'

export const fetchWorldWide = async function(){
    try{
        const fetchData = await fetch(API_URL_ALL);
        const fetchResp = await fetchData.json();


        return fetchResp;

    }catch(err){
        console.log(err)
    }
}


export const fetchAllCountries = async function(){
    try{
        const fetchData = await fetch(API_URL_COUNTRIES);
        const fetchResp = await fetchData.json();

        

        return fetchResp;

    }catch(err){
        console.log(err)
    }
}

export const fetchAllCountriesHistory = async function(country){
    try{
        const fetchData = await fetch(`${API_URL_HISTORY_ALL}/${country.length > 0 ? country : 'all'}?lastdays=all`);
        const fetchResp = await fetchData.json();

        return fetchResp;

    }catch(err){
        console.log(err)
    }
}