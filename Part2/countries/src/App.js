import React, { useState, useEffect } from 'react'
import Countries from './components/Countries'
import Filter from './components/Filter'
import axios from 'axios'

//due to the mismatching of capital cities in weatherAPI to the restcountriesAPI, there can be some erorrs.
//Especially with cities with spaces in their names Eg. Washington D.C, Pago Pago 

const App = () => {

    const [countries, setCountries] = useState([])
    const [weather, setWeather] = useState([])
    const [capital, setCapital] = useState(['Canberra'])
    const [update, setUpdate] = useState(false)
    const [newFilter, setNewFilter] = useState('')

    const api_key = process.env.REACT_APP_API_KEY


    //App effect, get data 

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                console.log('response: ', response)
                setCountries(response.data)
            })
    }, []
    )



    useEffect(() => {
        setUpdate(false)
        axios
            .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
            .then(response => {
                setWeather(response.data)
            })
        
    }, [api_key, capital])

    console.log(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)

    const handleFilterChange = (event) => {
        event.preventDefault()
        setNewFilter(event.target.value)

    }

    //to handle show country click event
    const showCountry = (event) => {
        event.preventDefault()
        setNewFilter(event.target.value)    
    }

    //handle capital city query for weather
    const capitalCityChange = (capital) => {
        setCapital(capital)
    }
    
    return (
        
        <div>
            <Filter
                value={newFilter}
                onChange={handleFilterChange} />

            <Countries
                countries={countries}
                filter={newFilter}
                showCountry={showCountry}
                capitalCityChange={capitalCityChange}
                weather={weather} />
                
         </div>
    )


}

export default App