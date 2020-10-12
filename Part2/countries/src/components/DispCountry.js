import React from 'react'

const DispCountry = ({country, weather}) => {

    console.log('weather passed into DispCountry: ', weather)

    //this is to prevent rendering when weather data has not been fetched yet

    if (weather.hasOwnProperty('error')) {

        return (
            <div>
            <h1>{country.name}</h1>

            <div> capital: {country.capital} </div>
            <div> population: {country.population} </div>

            <h2>languages</h2>

            <div> {country.languages.map(language => <li key={language.name}> {language.name} </li>)} </div>

            <br/>
            <img src={country.flag} alt="country flag here" width="100" height="100" />

            <br/>
            <br/>
            <div> problem rendering weather </div>
            </div>
        )
    }
      
    else {     

        return (
            <div>
                <h1>{country.name}</h1>

                <div> capital: {country.capital} </div>
                <div> population: {country.population} </div>

                <h2>languages</h2>

                <div> {country.languages.map(language => <li key={language.name}> {language.name} </li>)} </div>

                <br />
                <img src={country.flag} alt="country flag here" width="100" height="100" />

                <h2>weather in {country.capital}</h2>

                <div><b>temperature:</b> {weather['current'].temperature} Celcius </div>
                <img src={weather['current'].weather_icons[0]} alt='weather icon' />
                <div><b>wind:</b> {weather['current'].windspeed} mph direction {weather['current'].wind_dir}</div>
            </div>
        )
    }
}

export default DispCountry