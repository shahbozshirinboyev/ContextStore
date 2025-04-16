import { Link, NavLink } from "react-router-dom"

function Navbar() {
  return (
    <header>
      <div className="container">
        <h2><Link to="/">ContextStore</Link></h2>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar