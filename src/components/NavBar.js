import '../styles/NavBar.css'
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
const NavBar = () =>{
return(

    <div className="navbar">
        
        <img src={logo} alt ="not found" />
        
        <div className='rightSide'>
        <Link to="/Home">Home</Link>     |
        <Link to="/About">About</Link> |   
        <Link to="/Explore">Our Campuses</Link>     
        <Link to="/BucketList">Bucket List</Link>   

        </div>

    </div>
)

}
export default NavBar;