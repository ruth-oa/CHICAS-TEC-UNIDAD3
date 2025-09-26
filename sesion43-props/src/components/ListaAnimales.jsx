export function ListaAnimales({nombre, imagen}){
    return (
        <div>
            <img src={imagen} alt=""/>
            <p>{nombre}</p>
        </div>
    )
} 