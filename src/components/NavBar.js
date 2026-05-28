import '../styles/NavBar.css'
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
const NavBar = () =>{
return(

    <div className="navbar">
        
        <img src={logo} alt ="not found" />
        
        <div className='rightSide'>
        <Link to="/">Home</Link>     |
        <Link to="/About">About</Link> |   
        <Link to="/Campuses">Our Campuses</Link>    

        </div>

    </div>
)

}
export default NavBar;