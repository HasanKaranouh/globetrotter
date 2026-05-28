import CampusItem from '../components/CampusItem1.js'
import '../styles/style.css'
import Saida from '../assets/Saida.jpg'
import Beirut from '../assets/Beirut.jpg'
import Tyre from '../assets/Tyre.jpg'
import Akkar from '../assets/Akkar.jpg'

const Campuses = () =>{
return (
    <>
    <h1>This is the Campuses Page</h1>
    <div className='campuscontainer'>
       
        <CampusItem img ={Beirut} title = 'Beirut Campus' address = 'Mazraa'></CampusItem>
        <CampusItem img ={Saida}  title = 'Saida Campus' address = 'Saida'></CampusItem>
        <CampusItem img ={Tyre} title = 'Tyre Campus' address = 'Tyre'></CampusItem>
        <CampusItem img ={Akkar}  title = 'Akkar Campus' address = 'Akkar'></CampusItem>
    </div>
    </>
);
}
export default Campuses;