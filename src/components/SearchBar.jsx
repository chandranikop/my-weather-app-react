import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      onSearch(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Cari kota..."
        className="flex-1 px-6 py-4 rounded-full bg-white/20 backdrop-blur-md text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-lg"
      />
      <button
        className="px-8 py-4 bg-white/30 backdrop-blur-md rounded-full text-white font-semibold hover:bg-white/40 transition-all border border-white/30 cursor-pointer"
        type="submit"
      >
        Cari
      </button>
    </form>
  );
};

export default SearchBar;
