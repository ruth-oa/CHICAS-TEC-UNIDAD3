import './App.css'
import { ListaAnimales } from './components/ListaAnimales'
import { Frutas } from './components/Frutas'
import { Straykids } from './components/Straykids'

function App() {
  const animales = [{nombre:"gato", imagen:"data:image/jpeg;base64,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"},
                  {nombre:"perro", imagen:"https://i.pinimg.com/236x/2f/33/45/2f3345346dbca37cede6d9bab9e85813.jpg"},
                  {nombre:"conejo", imagen:"https://cdn0.uncomo.com/es/posts/7/8/2/como_cuidar_un_conejo_domestico_7287_600_square.jpg"},
                  {nombre:"raton", imagen:"https://i.pinimg.com/originals/71/71/e9/7171e90434c6031500f0fbcf2f7b0002.jpg"},
                  ]

  const frutasfav = ["manzana", "pera", "mandarina", "piña"]

 const perdidos = [{nombre:"Bangchan", imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/250px-Cat_November_2010-1a.jpg"},
                    {nombre:"Leeknow", imagen:"https://eq2imhfmrcc.exactdn.com/wp-content/uploads/2016/08/golden-retriever.jpg?strip=all&lossy=1&ssl=1"},
                    {nombre:"Changbin", imagen:"https://static.nationalgeographicla.com/files/styles/image_3200/public/05_nationalgeographic_2711495.webp?w=839&h=839"},
                    {nombre:"Hyunjin", imagen:"https://static.nationalgeographicla.com/files/styles/image_3200/public/05_nationalgeographic_2711495.webp?w=839&h=839"},
                    {nombre:"Felix", imagen:"https://static.nationalgeographicla.com/files/styles/image_3200/public/05_nationalgeographic_2711495.webp?w=839&h=839"},
                    {nombre:"Seungmin", imagen:"https://static.nationalgeographicla.com/files/styles/image_3200/public/05_nationalgeographic_2711495.webp?w=839&h=839"},
                    {nombre:"I.N", imagen:"https://static.nationalgeographicla.com/files/styles/image_3200/public/05_nationalgeographic_2711495.webp?w=839&h=839"}
                  ]

  return (
    <>
    <h1>Lista de Animales</h1>
    {animales.map(function(animal){ // el nombre "animal" puede ser cualquier cosa
    return <ListaAnimales imagen={animal.imagen} nombre={animal.nombre}/>
    })}

    <h2>Lista de mis frutas favoritas</h2>
    {frutasfav.map(function(fruta){
      return <Frutas nombre={fruta}/>
    })}

    <h1>Lista de Perdidos</h1>
    {perdidos.map(function(animal){
    return <Straykids imagen={animal.imagen} nombre={animal.nombre}/>
    })}

    </>
  )
}

export default App
