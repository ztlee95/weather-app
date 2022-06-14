import logo from './logo.svg';
import './App.css';
import InputComponent from './components/InputComponent'

function App() {
  return (
    <div className="App">
      <div className="weather">
        <InputComponent/>
        <div className="weather__description">
          <div className="weather__basics">
            <h1>Weather in Tokyo</h1>
            <h1>28&deg;C</h1>
          </div>
          <div className="weather__state">
            <span className="weather__icon">🌤</span>
            <h1>Partly<br/>cloudly</h1>
          </div>
          <div className="weather__params">
            <div className="weather__humidity">
              <h3>Humidity: 84%</h3>
              <h3>Wind speed: 5.66 m/s</h3>
            </div>
            <div className="weather__country">
              <h3>JP</h3>
              <h3>14/6/2022 8:00:00 PM</h3>
            </div>
          </div>
        </div>
        {/* <h3 className="weather__location">Weather in Tokyo</h3>
        <div className="weather__temp">
          <h1>28&deg;C</h1>
        </div>
        <div className="weather__description">
          <div>
            <div className="weather__description__head">
              <span className="weather__icon"></span>
              <h1>Partly cloudly</h1>
            </div>
            <h3>Humidity: 84%</h3>
            <h3>Wind speed: 5.66 m/s</h3>
          </div>
          <div>
            <h3>JP</h3>
            <h2 className="weather__date">14/Jun/2022, 8:00:00 PM</h2>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
