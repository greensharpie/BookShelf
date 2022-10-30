// import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom' 
import { BASE_URL } from '../globals'

const Book = (props) => {
  const {_id, name, author, description, rating, image} = props.book

  return (
    <div>
      <img src={image} alt={name} />
      <article>By {author} </article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>{rating}</h2>
      <Link to = {`/books/${_id}`}><button>Update</button></Link>
      <button onClick={deleteBook}>Delete</button>
    </div>
  )
}

export default Book