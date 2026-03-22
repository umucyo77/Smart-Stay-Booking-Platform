import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [query, setQuery] = useState(
    searchParams.get("location") || ""
  );

  const handleSearch = () => {
    if (!query) return;

    navigate(`/?location=${query}`);
  };

  return (
    <div className="flex gap-2 w-full max-w-md">
      
      <input
        type="text"
        placeholder="Search location..."
        className="border p-2 rounded w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button
        onClick={handleSearch}
        className="bg-black text-white px-4 rounded"
      >
        Search
      </button>

    </div>
  );
};

export default SearchBar;