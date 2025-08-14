import { HashRouter, Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Projects from './pages/Projects'
import TravelingSalesman from './pages/TravelingSalesman'

function App() {
  return (
  <HashRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/travelingsalesman" element={<TravelingSalesman />} />
      </Routes>
  </HashRouter>
  )
}

export default App
