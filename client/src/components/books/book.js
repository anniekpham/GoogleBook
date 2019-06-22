import React from 'react'
// import { Button } from 'reactstrap'
import './books.css'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap'

const Book = ({books, handlesave, isSaved, handledelete}) => 
     <>
        <Container>
            <Row>   
                {books.map(({title, authors, description, image, link, id}, index) => (
                    <Col xs="6" sm="6">
                        <Card>
                            <CardImg top width="30%" src={image} alt={title} />
                            <CardBody>
                            <CardTitle className="title">{title}</CardTitle>
                            <CardSubtitle className="subtitle">Written by: {authors.join(', ')}</CardSubtitle>
                            <CardText className="description">{description}</CardText>
                            <Button className="bookbtn">
                                    <a className="links" href={link}>View</a>
                                </Button>
                            {isSaved ? <Button className="bookbtn" id={id} value={index} onClick={handledelete}>Delete</Button> : <Button className="bookbtn" id={id} onClick={handlesave}>Save</Button>}            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
     </>
 
export default Book