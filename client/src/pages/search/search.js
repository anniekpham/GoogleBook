import React, {Component} from 'react'
import Searchbar from '../../components/searchbar'
import Book from '../../components/books'
import Axios from 'axios'
import Books from '../../utils'


class Search extends Component {
    state ={
        search: '',
        books: [],
        isSaved: this.props.isSaved,
        savedbook: false
    }

    componentDidMount() {
        this.setState({isSaved: false})
    }

    handleInputChange= e => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&download=epub&key=${process.env.REACT_APP_KEY}`)
        .then(({data: {items}}) => {
            let books = []
            items.forEach((item) => {
                    let bookssearch = {
                        title: item.volumeInfo.title,
                        authors: item.volumeInfo.authors,
                        description: item.volumeInfo.description,
                        image: item.volumeInfo.imageLinks.thumbnail,
                        link: item.volumeInfo.infoLink,
                        id: items.indexOf(item)
                    }
                    books.push(bookssearch)
            })
            this.setState({ 
                search: '',
                books
            })
        })
        .catch(e => console.log(e))
    }

    handlesave = e => {
        Books.postOne(this.state.books[e.target.id])
        this.setState({savedbook: true})
    }
    render () {
        return (
            <>
                <Searchbar search={this.state.search} handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} />
                <Book books={this.state.books} handlesave={this.handlesave} isSaved={this.state.isSaved}/>
            </>
        )
    }
}

export default Search