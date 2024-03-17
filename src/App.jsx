import Welcome from "./components/Welcome";
import Repos from "./components/Repos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="*" element={<Welcome />} />
          <Route path="/repos" element={<Repos />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
