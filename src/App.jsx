import { useState } from "react";
import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AdoptedPetContext from "./AdoptedPetContext";
import SearchParams from "./SearchParams";
import Details from "./Details";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <header>
            <Link to="Adopt_Pet/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="details/:id" element={<Details />} />
            <Route path="Adopt_Pet/" element={<SearchParams />} />
          </Routes>
          <ReactQueryDevtools />
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<App />);
createRoot(document.getElementById("root")).render(<App />);
