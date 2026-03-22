import { createContext, useContext, useState } from "react";
import Home from "../pages/Home";

const FilterContext = createContext();

export const FilterProvider = () => {
  const [filters, setFilters] = useState({});

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
     <Home />
    </FilterContext.Provider>
  );
};

export const useFilters = () => useContext(FilterContext);