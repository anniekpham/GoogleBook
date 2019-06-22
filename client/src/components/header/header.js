import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Button } from 'reactstrap'
import './header.css'

const Header = ({toggleSaved, toggleSearch}) => {
    return (
     <>
        <Jumbotron className="jumbo">
            <h1 className="display-3">Google Books</h1>
            <Button color="primary" className="headerbtn">
                <Link to="/" onClick={toggleSearch}>Search</Link>        
            </Button>
            <Button color="primary" className="headerbtn">
                <Link to="/Saved" onClick={toggleSaved}>Saved</Link> 
            </Button>
        </Jumbotron>
     </>
    )
}

export default Header