import Welcome from "./components/Welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>;
}

export default App;
