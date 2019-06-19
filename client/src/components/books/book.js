import React from 'react'


const Book = ({books}) => 
     <>
        {books.map(({title, authors, description, image, link}) => (
            <div>
                <h3>{title}</h3>
                <button>
                    <a href={link}>View</a>
                </button>
                <button>Save</button>
                {authors.map(author => (
                    <h5>Written by {author}</h5>
                ))}
                <p>{description}</p>
                <img src={image} />
            </div>
        ))}
     </>
 
export default Book