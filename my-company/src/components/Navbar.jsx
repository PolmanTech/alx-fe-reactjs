
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    const linkStyles = {
        marginRight: '36px'
    }

    return (
            <nav style={ { backgroundColor: '#213547', display: 'flex', justifyContent: 'space-around', padding: '15px 0' } }>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/services'>Services</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
    )
}

export default Navbar
