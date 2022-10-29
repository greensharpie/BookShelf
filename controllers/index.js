const Book = require('../models/book')

const createBook = async (req, res) => {
  try {
    const book = await new Book(req.body)
    await book.save()
    return res.status(201).json({
      book
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find()
    return res.status(200).json({ books })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getBookById = async (req, res) => {
  try {
    const { id } = req.params
    const book = await Book.findById(id)
    if (book) {
      return res.status(200).json({ book })
    }
    return res.status(404).send('Book with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createBook,
  getAllBooks,
  getBookById
}
