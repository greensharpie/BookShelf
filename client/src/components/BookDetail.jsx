import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals' 


const BookDetail = () => {

  const { id } = useParams()
  const [bookDetail, setBookDetails] = useState()

  useEffect(() => {

    const getBookId = async () => {
      try{
        const res = await axios.get(`${BASE_URL}/books/${id}`)
        setBookDetails(res.data)
        console.log('detail res', res)
      }catch (error) {
        console.log(error)
      }
    }
    getBookId()
  }, [id])


  return (
    <div>
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
        <button type='submit'>Update Book</button>
        <br></br>
      </form>
    </div>
  )
}

export default BookDetail