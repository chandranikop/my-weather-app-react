import { Droplets, Wind, Eye, Gauge } from "lucide-react";

const WeatherDetail = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-8">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
        <div className="flex items-center gap-2 mb-2">
          <Droplets className="w-5 h-5 text-white/80" />
          <span className="text-white/80 text-sm">Kelembaban</span>
        </div>
        <p className="text-2xl font-bold text-white">{data.main.humidity}%</p>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
        <div className="flex items-center gap-2 mb-2">
          <Wind className="w-5 h-5 text-white/80" />
          <span className="text-white/80 text-sm">Kec. Angin</span>
        </div>
        <p className="text-2xl font-bold text-white">{data.wind.speed} m/s</p>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
        <div className="flex items-center gap-2 mb-2">
          <Eye className="w-5 h-5 text-white/80" />
          <span className="text-white/80 text-sm">Jarak Pandang</span>
        </div>
        <p className="text-2xl font-bold text-white">{data.visibility} km</p>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
        <div className="flex items-center gap-2 mb-2">
          <Gauge className="w-5 h-5 text-white/80" />
          <span className="text-white/80 text-sm">Tekanan</span>
        </div>
        <p className="text-2xl font-bold text-white">{data.pressure} mb</p>
      </div>
    </div>
  );
};

export default WeatherDetail;
