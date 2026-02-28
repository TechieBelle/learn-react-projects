import { useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [city, setCity] = useState("");
   const [weather, setWeather] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (city.trim() === "") return;
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
      );
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-500 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-md text-white shadow-2xl">
        <h1 className="text-4xl font-bold text-center mb-6">Weather App</h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
            placeholder="Enter a city..."
            className="flex-1 px-4 py-2 rounded-xl bg-white/20 placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
          />
          <button
            onClick={fetchWeather}
            className="px-4 py-2 bg-white text-blue-800 font-semibold rounded-xl hover:bg-blue-100 transition"
          >
            Search
          </button>
        </div>

        {loading && (
          <p className="text-center text-white/80">Fetching weather...</p>
        )}
        {error && <p className="text-center text-red-300">{error}</p>}

        {weather && (
          <div className="text-center">
            <h2 className="text-2xl font-bold">
              {weather.name}, {weather.sys.country}
            </h2>
            <div className="flex items=center justify-center ">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />
              <p className="text-5xl font-thin my-4">
                {Math.round(weather.main.temp)}°C
              </p>
            </div>
            <p className="text-lg capitalize">
              {weather.weather[0].description}
            </p>
            <div className="flex justify-around mt-6 bg-white/10 rounded-xl p-4">
              <div>
                <p className="text-white/70 text-sm">Humidity</p>
                <p className="text-xl font-semibold">
                  {weather.main.humidity}%
                </p>
              </div>
              <div>
                <p className="text-white/70 text-sm">Wind</p>
                <p className="text-xl font-semibold">
                  {weather.wind.speed} m/s
                </p>
              </div>
              <div>
                <p className="text-white/70 text-sm">Feels Like</p>
                <p className="text-xl font-semibold">
                  {Math.round(weather.main.feels_like)}°C
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
