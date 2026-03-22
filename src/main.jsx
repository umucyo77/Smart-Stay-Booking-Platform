import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FavoritesProvider } from "./context/FavoritesContext";
import { FilterProvider } from "./context/FilterContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
  <AuthProvider>
    <FilterProvider>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </FilterProvider>
  </AuthProvider>
</QueryClientProvider>
);