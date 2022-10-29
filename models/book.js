const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Book = new Schema(
  {
    name: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: String, required: true },
    available: { type: Boolean, required: true },
    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Book', Book)
