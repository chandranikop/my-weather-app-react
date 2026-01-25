import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherDetail from "./components/WeatherDetail";
import Footer from "./components/Footer";
import { useCallback, useEffect, useState } from "react";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("London");
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = useCallback(
    async (cityName) => {
      if (!cityName) return;

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`,
        );

        if (!response.ok) throw new Error("Kota tidak ditemukan");

        const data = await response.json();
        setWeatherData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setWeatherData(null);
      }
    },
    [API_KEY],
  );

  useEffect(() => {
    fetchWeather(city);
  }, [fetchWeather, city]);

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-400 to-indigo-900 flex flex-col items-center justify-center p-4 font-sans text-white">
      <h1 className="text-4xl">My Weather App using React.JS</h1>
      <div className="w-full max-w-lg mt-8 space-y-6">
        {/* Components */}
        <SearchBar onSearch={fetchWeather} setCity={setCity} />

        {error && <p className="text-center text-red-400">{error}</p>}

        {weatherData && (
          <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/30">
            <CurrentWeather data={weatherData} />
            <WeatherDetail data={weatherData} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
