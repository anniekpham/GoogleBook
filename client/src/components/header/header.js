import React from 'react'
import { Link } from 'react-router-dom'


const Header = ({toggleSaved, toggleSearch}) => {
    return (
     <>
        <nav>
            <h3>Goggle Books</h3>
            <Link to="/" onClick={toggleSearch}>Search</Link> 
            <Link to="/Saved" onClick={toggleSaved}>Saved</Link> 
        </nav>
     </>
    )
}

export default Header