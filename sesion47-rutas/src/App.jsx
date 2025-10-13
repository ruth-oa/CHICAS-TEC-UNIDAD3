import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Inicio } from './paginas/Inicio'
import Nosotros from './paginas/Nosotros'
import Productos from './paginas/Productos'
import {FormContacto} from './paginas/Contacto'
import NavBar from './componentes/NavBar'
import { Footer } from './componentes/Footer'
import Comentarios from "./componentes/Comentarios";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/nosotros' element={<Nosotros/>}></Route>
        <Route path='/productos' element={<Productos/>}></Route>
        <Route path="/contacto" element={<FormContacto />} />
        <Route path="/comentarios" element={<Comentarios />} />
        

        

      </Routes>
      <Footer/>
    </>
  )
}

export default App
