import React from 'react'
import DispCountry from './DispCountry'

const Countries = ({countries, filter, showCountry, capitalCityChange, weather}) => {


    //filter countries data passed in, then lowercase the .name entries to match lower case filter

    const countriesFiltered = countries.filter(country =>
        country.name.toLowerCase().includes(filter.toLowerCase()))

    if (countriesFiltered.length === 0)
        return (<div> no matches </div>)

    else if (countriesFiltered.length === 1) {

        capitalCityChange(countriesFiltered[0].capital)
   
        return (
            <DispCountry key={countriesFiltered[0].name} country={countriesFiltered[0]}
                weather={weather} />)
            
    }

    else if (countriesFiltered.length <= 10) {
        return (
            // mapping the array and then passing in the value through the button click, 
            // which will then reset the filter to the country name

            countriesFiltered.map(country =>
                <div key ={country.name}>
                    {country.name} <button value={country.name} onClick={showCountry} > show </button>
                </div>
                )
        )
    }
    else
        return (
            <div> too many matches, specify another filter </div> 
        )

}

export default Countries