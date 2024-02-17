import React from 'react'
import { Link } from '@remix-run/react'
import { useLocation } from '@remix-run/react'

import cartImage from '../../public/img/carrito.png'

const Navigation = () => {
    const location = useLocation()
    return (
        <nav className="navigation">
            <Link
                to="/"
                prefetch='render'
                className={location.pathname === "/" ? 'active' : ''}
            >
                Home
            </Link>
            <Link
                to="/guitars"
                prefetch='render'
                className={location.pathname === "/guitars" ? 'active' : ''}
            >
                Shop
            </Link>
            <Link
                to="/about"
                prefetch='render'
                className={location.pathname === "/about" ? 'active' : ''}
            >
                About
            </Link>
            <Link
                to="/blog"
                prefetch='render'
            >
                Blog
            </Link>
            <Link
                to="/cart"
                prefetch='render'
                className={location.pathname === "/cart" ? 'active' : ''}
            >
                <img src={cartImage} alt='Cart' />
            </Link>
        </nav>
    )
}

export default Navigation