import axios from 'axios'
import { Link } from 'react-router-dom' 
import { BASE_URL } from '../globals'

const Book = (props) => {
  const {_id, name, author, description, rating, image} = props.book
  const deleteBook = async () => {
    try{
      await axios.delete(`${BASE_URL}/books/${_id}`)
    } catch (error){
      console.log(error)
    }
  }
  return (
    <div className='bookContainer'>
      <div className='bookImage'>
      <img src={image} alt={name} />
      </div>
      <div className='bookText'>
      <article>By {author} </article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>Rating: {rating}</h2>
      {/* </div>
      <div className='bookButtons'> */}
      <Link to = {`/books/${_id}`}><button>Update</button></Link>
      <button onClick={deleteBook}>Delete</button>
      </div>
    </div>
  )
}

export default Book