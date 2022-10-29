const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('Root page!'))

router.post('/books', controllers.createBook)

router.get('/books', controllers.getAllBooks)

router.get('/books/:id', controllers.getBookById)

router.put('/books/:id', controllers.updateBook)

router.delete('/books/:id', controllers.deleteBook)

module.exports = router
