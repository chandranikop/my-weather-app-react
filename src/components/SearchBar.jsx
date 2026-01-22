const SearchBar = () => {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Cari kota..."
        className="flex-1 px-6 py-4 rounded-full bg-white/20 backdrop-blur-md text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-lg"
      />
      <button className="px-8 py-4 bg-white/30 backdrop-blur-md rounded-full text-white font-semibold hover:bg-white/40 transition-all border border-white/30">
        Cari
      </button>
    </div>
  );
};

export default SearchBar;
