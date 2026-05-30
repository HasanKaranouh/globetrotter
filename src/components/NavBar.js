import { Link } from 'react-router-dom';
import '../styles/NavBar.css'; 

const NavBar = () => {
  return (
    <div className="navbar">
        <div className='rightSide'>
            <Link to="/">Home</Link> 
            <Link to="/Explore">Explore</Link>
            <Link to="/BucketList">Bucket List</Link> 
            <Link to="/About">About</Link>
        </div>
    </div>
  )
}

export default NavBar;