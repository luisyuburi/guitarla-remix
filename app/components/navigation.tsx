import React from 'react'
import { Link } from '@remix-run/react'
import { useLocation } from '@remix-run/react'


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
                to="/blog"
                prefetch='render'
                className={location.pathname === "/blog" ? 'active' : ''}
            >
                Blog
            </Link>
            <Link
                to="/about"
                prefetch='render'
                className={location.pathname === "/about" ? 'active' : ''}
            >
                About
            </Link>
        </nav>
    )
}

export default Navigation