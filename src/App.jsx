import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <p className="text-50">
      Hello, I am Colton Spurgin and I like to build things. I am currently in
      search of my next challenge. Among my many interests, I am currently most
      interested in web development.{" "}
    </p>
  );
}

export default App;
