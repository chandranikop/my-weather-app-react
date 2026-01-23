const CurrentWeather = ({data}) => {
  return (
    <>
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-white mb-2">{data.name}, {data.sys.country}</h1>
        <p className="text-white/80 text-lg">
          {new Date().toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      {/* Temperature Display */}
      <div className="flex items-center justify-center mb-8">
        <div className="text-center">
          
          <div className="text-7xl font-bold text-white mt-4">{Math.round(data.main.temp)}°C</div>
          <p className="text-2xl text-white/90 mt-2">{data.weather[0].description}</p>
          <p className="text-white/70 text-lg mt-1">Terasa seperti {data.main.feels_like}°C</p>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
