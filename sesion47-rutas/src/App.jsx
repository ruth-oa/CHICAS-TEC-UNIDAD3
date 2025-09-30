import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Inicio } from './paginas/Inicio'
import Nosotros from './paginas/Nosotros'
import NavBar from './componentes/NavBar'
import Productos from './paginas/Productos'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/nosotros' element={<Nosotros/>}></Route>
        <Route path='/productos' element={<Productos/>}></Route>

      </Routes>
    </>
  )
}

export default App
