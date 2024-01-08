import { Link, useLocation } from '@remix-run/react'
import logo from '../../public/img/logo.svg'
const Header = () => {
  const location = useLocation()
  return (
    <header className="header">
      <div className="contenedor barra">
        <Link to="/" className="logo">
          <img className='logo' src={logo} alt="logo image" />
        </Link>
        <nav className="navegacion">
          <Link
            to="/"
            prefetch='render'
          >
            Home
          </Link>
          <Link
            to="/shop"
            prefetch='render'
          >
            Shop
          </Link>
          <Link
            to="/blog"
            prefetch='render'
          >
            Blog
          </Link>
          <Link
            to="/about"
            prefetch='render'
          >
            About
          </Link>
        </nav>

      </div>
    </header>
  )
}

export default Header