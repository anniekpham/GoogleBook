import React from 'react'


const Book = ({books, handlesave, isSaved, handledelete}) => 
     <>
        {books.map(({title, authors, description, image, link, id}, index) => (
            <div>
                <h3>{title}</h3>
                <button>
                    <a href={link}>View</a>
                </button>
                {isSaved ? <button id={id} value={index} onClick={handledelete}>Delete</button> : <button id={id} onClick={handlesave}>Save</button>}
                <h5>Written by: {authors.join(', ')}</h5>
                <p>{description}</p>
                <img src={image} />
            </div>
        ))}
     </>
 
export default Book