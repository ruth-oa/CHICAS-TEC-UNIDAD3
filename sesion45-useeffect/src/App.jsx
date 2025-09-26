import Cronometro from "./componentes/Cronometro";
import { Numeropar } from "./componentes/Numeropar";
import ListaPokemones from "./componentes/listapokemon";
import ContadorVisitas from "./componentes/Contador";
import { WindowSize } from "./componentes/WindowSize";
import { TituloConContador } from "./componentes/TituloContador";
import ListaUsuarios from "./componentes/ListaUsuarios";

function App() {
  return (
    <div>
      <h1>
      <ContadorVisitas />
      </h1>
      <Numeropar />
      <Cronometro />
      <ListaPokemones />
      <WindowSize />
      <TituloConContador />
      <ListaUsuarios />
      
    </div>
  );
}

export default App;
