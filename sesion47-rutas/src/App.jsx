// src/App.jsx
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Inicio } from "./paginas/Inicio";
import Nosotros from "./paginas/Nosotros";
import Productos from "./paginas/Productos";
import { FormContacto } from "./paginas/Contacto";
import Comentarios from "./componentes/Comentarios";
import LayoutPrincipal from "./layouts/LayoutPrincipal"; // layout
import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";
import LayoutVacio from "./layouts/LayoutVacio"
import { Navigate } from "react-router-dom";
import Especial from "./paginas/Especial";

export default function App() {
return (
    <>

      <Routes>
        <Route element={<LayoutPrincipal />} >
          <Route path='/' element={<Inicio />}></Route>
          <Route path='/nosotros' element={<Nosotros />}></Route>
          <Route path='/productos' element={<Productos />}></Route>
          {/* <Route path='/productos/:id' element={<Detalle />}></Route> */}
          <Route path='/contacto' element={<FormContacto />}></Route>
        </Route>

        <Route element={<LayoutVacio />}>
          <Route path="/especial" element={<Especial />} />
        </Route>

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}




// import './App.css'
// import {useState} from "react"
// import { Routes, Route } from 'react-router-dom'
// import { Inicio } from './paginas/Inicio'
// import Nosotros from './paginas/Nosotros'
// import Productos from './paginas/Productos'
// import {FormContacto} from './paginas/Contacto'
// import NavBar from './componentes/NavBar'
// import { Footer } from './componentes/Footer'
// import Comentarios from "./componentes/Comentarios";

// function App() {
//   return (
//     <>
//       <NavBar />
//       <Routes>
//         <Route path='/' element={<Inicio/>}></Route>
//         <Route path='/nosotros' element={<Nosotros/>}></Route>
//         <Route path='/productos' element={<Productos/>}></Route>
//         <Route path="/contacto" element={<FormContacto />} />
//         <Route path="/comentarios" element={<Comentarios />} />
        

        

//       </Routes>
//       <Footer/>

//       <LoginModal open={loginOpen} onClose={() => setLoginOpen(false) }>


//       </LoginModal>


//     </>
//   )
// }

// export default App
