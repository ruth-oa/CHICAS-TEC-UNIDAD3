import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Productos } from './componentes/Productos'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Productos/>
    </>
  )
}

export default App
