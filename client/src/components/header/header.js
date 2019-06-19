import React from 'react'
import { Link } from 'react-router-dom'


const Header = _ => {
    return (
     <>
        <nav>
            <h3>Goggle Books</h3>
            <Link to="/">Search</Link> 
            <Link to="/Saved">Saved</Link> 
        </nav>
     </>
    )
}

export default Header