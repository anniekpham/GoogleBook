import axios from 'axios'

const Books = {
    getAll: _ => axios.get(`/books`),
    postOne: book => axios.post('/books', book),
    deleteOne: (id) => axios.delete(`/books/${id}`)
}

export default Books