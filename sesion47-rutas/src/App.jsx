// src/App.jsx
import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Inicio } from "./paginas/Inicio";
import Nosotros from "./paginas/Nosotros";
import Productos from "./paginas/Productos";
import { FormContacto } from "./paginas/Contacto";
import NavBar from "./componentes/NavBar";
import { Footer } from "./componentes/Footer";
import Comentarios from "./componentes/Comentarios";
import Modal from "./componentes/Modal";
import { LoginForm } from "./componentes/LoginForm";
import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext"; // si tienes uno

export default function App() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <ThemeProvider>
      <UserProvider>
        <NavBar onOpenLogin={() => setLoginOpen(true)} />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<FormContacto />} />
          <Route path="/comentarios" element={<Comentarios />} />
        </Routes>

        <Footer />

        <Modal open={loginOpen} onClose={() => setLoginOpen(false)}>
          <LoginForm onSuccess={() => setLoginOpen(false)} />
        </Modal>
      </UserProvider>
    </ThemeProvider>
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
