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
      
    </div>
  )
}

export default BookDetail