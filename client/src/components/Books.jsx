// import React from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useState, useEffect } from 'react'  
import Book from '../components/Book'

  const Books = () => {

  const [book, setBooks] = useState()

  useEffect(() => {

    const showBook = async () => {
      try{
        const res = await axios.get(`${BASE_URL}/books`)
        setBooks(res.data.books)
      }catch(error){
        console.log(error)
      }
    }
    showBook()
    }, [])


  return (
    <><div className='booksContainer'></div><ul>
      {book && book.map((book, i) => (
        <div className='bookSomething' key= {i}>
          <Book book= {book} />
        </div>
      ))}
    </ul></>
  )
}

export default Books