import './App.css'
import { Contador } from './components/Contador'
import { Ambiente } from './components/ambiente'

function App() {
  const animales = ["mafer", "ximena", "raton"]
  const [animal1, animal2, animal3] = animales

  console.log(animal1, animal2, animal3)
  
  return (
    <>
      <h1>CONTADORRRR</h1>
      <img
        src="https://uploads.ungrounded.net/tmp/img/642000/iu_642225_2476495.png"
        alt="animal"
      />
      <Contador />
    
      <Ambiente />
    </>
  )
}

export default App
