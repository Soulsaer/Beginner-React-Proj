import { useState } from 'react'
import './App.css'

import Accordion from './Components/Accordion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
      <Accordion />
      </div>
    </>
  )
}

export default App
