import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/layout/Header'
import Hero from './components/hero/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App "  >
      
<Header/>
<Hero/>

    </div>
  )
}

export default App
