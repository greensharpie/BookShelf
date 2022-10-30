import React from 'react'

const AddBook = () => {
  return (
    <div>
      <form>
        <label htmlFor='name'>Name</label>
        <input 
        id= 'name'
        type= 'text'
        />
        <br></br>
        <label htmlFor='author'>Author</label>
        <input 
        id= 'author'
        type= 'text'
        />
        <br></br>
        <label htmlFor='description'>Description</label>
        <input 
        id= 'description'
        type= 'text'
        />
        <br></br>
        <label htmlFor='rating'>Rating</label>
        <input 
        id= 'rating'
        type= 'number'
        />
        <br></br>
        <button type='submit'>Add Book</button>
        <br></br>
      </form>
    </div>
  )
}

export default AddBook