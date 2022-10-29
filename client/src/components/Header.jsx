import { Link } from 'react-router-dom'
const Header = () => {

  return (
    <div className="header">
      <nav className="headerLinks">
      <Link to = {'/about'}>About Bookshelf</Link>
        <Link to = {'/add'}>Add Book </Link>
        <Link to = {'/books'}>Books</Link>
      </nav>
    </div>
  )
}

export default Header