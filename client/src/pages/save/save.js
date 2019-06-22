import React, {Component} from 'react'
import Books from '../../utils'
import Book from '../../components/books'

class Saved extends Component {
    state = {
        books: [],
        isSaved: this.props.isSaved
    }
    componentDidMount() {
        Books.getAll()
        .then(({data}) => {
            let books = []
            data.forEach(item => {
                let bookssearch = {
                    title: item.title,
                    authors: item.authors,
                    description: item.description,
                    image: item.image,
                    link: item.link,
                    id: item._id
                }
                books.push(bookssearch)
            })
            this.setState({ books, isSaved: true })
        })
        .catch(e => console.log(e))
    }

    handledelete = e => {
        Books.deleteOne(e.target.id)
        let books = this.state.books
        books.splice(e.target.value, 1)
        this.setState({ books })
    }
    render () {
        return (
            <>
                <Book books={this.state.books} isSaved={this.state.isSaved} handledelete={this.handledelete} />
            </>
        )
    }
}

export default Saved