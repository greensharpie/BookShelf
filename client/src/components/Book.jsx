import React from 'react'

const Book = (props) => {
  const {_id, name, author, description, rating, image} = props.book

  return (
    <div>
      <img src={image} alt={name} />
      <article>By {author} </article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>{rating}</h2>
      <button>Update</button>
      <button>Delete</button>
    </div>
  )
}

export default Book