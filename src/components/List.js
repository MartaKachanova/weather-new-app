import { useState } from "react";

function List() //props
// const [isLoading, isError, data] = useFetch( "https://api.weatherapi.com/v1/current.json?key=0fad4c06c1af4409aef200446220611&q=" +
// inputCity +"&aqi=no")
 {
  const [temperature, setTemperature] = useState("");
  const [condition, setCondition] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [error, setError] = useState("");

  const updateWeather = () => {
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=0fad4c06c1af4409aef200446220611&q=" +
        inputCity +
        "&aqi=no"
    )
      .then((el) => el.json())
      .then((data) => {
        setTemperature(data.current.temp_c);
        setCondition(data.current.condition.text);
        setError(false);
      })
      .catch((error) => setError(true));
  };

  return (
    // {isLoading && <div style={{textAlign: 'center'}}>LOADING</div>};
    // {isError&& <div style={{textAlign: 'center'}}>ERROR</div>};
    // {data &&  }
    <div className="App">
      {error && <div className="error">Такого міста немає</div>}
      {temperature && condition && (
        <>
          <header className="location-box">
            <div className="location">{inputCity}</div>
          </header>

          <div className="weather-box">
            <div className="temp"> {temperature} </div>
            <div className="weather">{condition}</div>
          </div>
        </>
      )}

      <div className="weather-box">
        <input
          className="search-bar"
          placeholder="Введіть місто..."
          type={"text"}
          value={inputCity}
          onChange={(event) => {
            setInputCity(event.target.value);
          }}
        />
        <button type="button" onClick={updateWeather}>
          Показати погоду
        </button>
      </div>
    </div>
  );
}

export default List;
