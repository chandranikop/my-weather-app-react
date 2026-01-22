import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherDetail from "./components/WeatherDetail";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-400 to-indigo-900 flex flex-col items-center justify-center p-4 font-sans text-white">
      <h1 className="text-4xl">My Weather App using React.JS</h1>
      <div className="w-full max-w-lg mt-8 space-y-6">
        {/* Components */}
        <SearchBar />
        <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/30">
          <CurrentWeather />
          <WeatherDetail />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
