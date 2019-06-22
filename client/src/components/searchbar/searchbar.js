import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Searchbar = ({search, handleInputChange, handleSubmit}) => {
    return (
     <>
        {/* <form id="searchbar">
        </form> */}
        <Form id="searchbar">
            <FormGroup>
                <Input id="search" type="text" value={search} onChange={handleInputChange} placeholder="Harry Potter..." />
                <Button onClick={handleSubmit} className="searchbtn">Search</Button>
            </FormGroup>
        </Form>
     </>
    )
}

export default Searchbar