import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import Welcome from './pages/Welcome'
import TravelingSalesman from './pages/TravelingSalesman'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/projects" element={<Navigate to="/" replace />} />
        <Route path="/travelingsalesman" element={<TravelingSalesman />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}

export default App
