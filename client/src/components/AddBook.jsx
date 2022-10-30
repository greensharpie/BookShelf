import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals' 



const AddBook = () => {
  const [input, setInputs] = useState({
    name: '',
    author: '',
    description: '',
    rating: '',
    available: false,
    image: ''
  })

  const [checked, setChecked] = useState(false)

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  const addBook = async () =>{
    try{
    await axios.post(`${BASE_URL}/books`, {
      name: String(input.name),
      author: String(input.author),
      description: String(input.description),
      rating: Number(input.rating),
      image: String(input.image),
      available: Boolean(checked)
    }
    )} catch (error) {
      console.log(error)  
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(input, checked)
    addBook()
  }


  return (
    <div className='addBookContainer'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name: </label>
        <input 
        id = 'name'
        type = 'text'
        value = {input.name}
        onChange= {handleChange}
        />
        <br></br>
        <label htmlFor='author'>Author: </label>
        <input 
        id= 'author'
        type= 'text'
        value = {input.author}
        onChange= {handleChange}
        />
        <br></br>
        <label htmlFor='description'>Description: </label>
        <input 
        id= 'description'
        type= 'text'
        value = {input.description}
        onChange= {handleChange}
        />
        <br></br>
        <label htmlFor='rating'>Rating: </label>
        <input 
        id= 'rating'
        type= 'number'
        value = {input.rating}
        onChange= {handleChange}
        />
        <br></br>
        <label htmlFor='available'>Available: </label>
        <input 
        id= 'available'
        type= 'checkbox'
        control = {input.checked}
        value = {input.available}
        onChange= {() => setChecked(!checked)}
        />
        <br></br>
        <label htmlFor='image'>Image: </label>
        <input 
        id= 'image'
        type= 'text'
        value = {input.image}
        onChange= {handleChange}
        />
        <br></br>
        <button type='submit'>Add Book</button>
        <br></br>
      </form>
    </div>
  )
}

export default AddBook