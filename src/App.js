import logo from './logo.svg';
import './App.css';
import InputComponent from './components/InputComponent'
import axios from 'axios'
import { useState,useEffect } from 'react';

function App() {
  
  const [temp, setTemp] = useState(null)
  const [location, setLocation] = useState("")
  const [inputLocation, setInputLocation] = useState("")
  const [description, setDescription] = useState("")
  const [icon, setIcon] = useState("")
  const [humidity, setHumidity] = useState(null)
  const [windSpeed, setWindSpeed] = useState(null)
  const [country, setCountry] = useState("")
  const [dataFetched, setDataFetched] = useState(false)

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
  
  const fetchData = async (e) => {
    e.preventDefault()
    
    try {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputLocation}&appid=${API_KEY}&units=metric`)
      const data = await res.data
  
      setTemp(data.main.temp)
      setLocation(data.name)
      setDescription(data.weather[0].description)
      setIcon(data.weather[0].icon)
      setHumidity(data.main.humidity)
      setWindSpeed(data.wind.speed)
      setCountry(data.sys.country)

      setDataFetched(true)
    } catch (err) {
      console.log(err)
      alert("Please enter a valid location")
    }
  }

  const fetchDefaultData = async () => {
    if(!dataFetched){
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Singapore&appid=${API_KEY}&units=metric`)
      const data = await res.data

      setTemp(data.main.temp)
      setLocation(data.name)
      setDescription(data.weather[0].description)
      setIcon(data.weather[0].icon)
      setHumidity(data.main.humidity)
      setWindSpeed(data.wind.speed)
      setCountry(data.sys.country)
    }
  }

  useEffect(()=>{
    fetchDefaultData()
  },[])

  return (
    <div className="App">
      <div className="weather">
        <InputComponent
          text={(e)=> setInputLocation(e.target.value)}
          submit={fetchData}
          click={fetchData}
        />
        <div className="weather__description">
          <div className="weather__basics">
            <h1>Weather in {location}</h1>
            <h1>{temp}&deg;C</h1>
          </div>
          <div className="weather__state">
            <span className="weather__icon">
              <img src={`http://openweathermap.org/img/w/${icon}.png`} width="80" alt="weather icon" />
            </span>
            <h1>{description}</h1>
          </div>
          <div className="weather__params">
            <div className="weather__humidity">
              <h3>Humidity: {humidity}%</h3>
              <h3>Wind speed: {windSpeed} m/s</h3>
            </div>
            <div className="weather__country">
              <h3>{country}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
