import React from 'react'
import '../styles/sections/Navbar.css'

function Navbar() {
    return (
        <header>
            <nav className="header__nav">
                <div className="header__logo">
                    <h4>Fracas</h4>
                    <div className="header__logo-overlay"></div>
                </div>
                <ul className="header__menu">
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar