import { NavLink, Link } from 'react-router-dom'

export default function NavBar(){
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="brand" aria-label="La casa de la oficina - Inicio">
          <div className="brand-badge">Of</div>
          <span className="brand-name">La casa de la oficina</span>
        </Link>

        <div className="nav-links" role="navigation" aria-label="Navegación principal">
          <NavLink to="/" end className={({isActive}) => `nav-link ${isActive ? 'active':''}`}>Inicio</NavLink>
          <NavLink to="/nosotros" className={({isActive}) => `nav-link ${isActive ? 'active':''}`}>Nosotros</NavLink>
          <NavLink to="/productos" className={({isActive}) => `nav-link ${isActive ? 'active':''}`}>Productos</NavLink>
        </div>
      </div>
    </nav>
  )
}