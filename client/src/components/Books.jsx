// import React from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useState, useEffect } from 'react'  
import Book from '../components/Book'
// import { useParams } from 'react-router-dom'


const Books = () => {

  // const { id } = useParams()

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
    console.log(book)
    }, [])


  return (
    <><div className='booksContainer'>All Books</div><ul>
      {book && book.map((book, i) => (
        <div className='book' key= {i}>
          <Book book= {book} />
        </div>
      ))}
    </ul></>
  )
}

export default Books