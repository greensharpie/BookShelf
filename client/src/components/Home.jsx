import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <Link to={'/books'}>
      <button className="allBooks">View All Books</button>
      </Link>
    </div>
  )
}

export default Home