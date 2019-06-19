import React from 'react'


const Searchbar = ({search, handleInputChange, handleSubmit}) => {
    return (
     <>
        <h2>Book Search</h2>
        <form id="searchbar">
            <input id="search" type="text" value={search} onChange={handleInputChange}/>
            <button onClick={handleSubmit}>Search</button>
        </form>
     </>
    )
}

export default Searchbar