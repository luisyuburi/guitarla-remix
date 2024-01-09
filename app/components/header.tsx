import { Link } from '@remix-run/react'
import Navigation from './navigation'
import logo from '../../public/img/logo.svg'
const Header = () => {

  return (
    <header className="header">
      <div className="container navbar">
        <Link to="/" className="logo">
          <img className='logo' src={logo} alt="logo image" />
        </Link>
        <Navigation />

      </div>
    </header>
  )
}

export default Header