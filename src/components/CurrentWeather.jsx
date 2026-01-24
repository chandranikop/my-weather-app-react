const CurrentWeather = ({ data }) => {

  const { name, main: { temp, feels_like }, weather: [{ main }], sys: { country } } = data;

  const formattedData = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-white mb-2">{name}, {country}</h1>
        <p className="text-white/80 text-lg">{formattedData}</p>
      </div>

      {/* Temperature Display */}
      <div className="flex items-center justify-center mb-8">
        <div className="text-center">
          <div className="text-7xl font-bold text-white mt-4">{Math.round(temp)}°C</div>
          <p className="text-2xl text-white/90 mt-2">{main}</p>
          <p className="text-white/70 text-lg mt-1">Terasa seperti {Math.round(feels_like)}°C</p>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
