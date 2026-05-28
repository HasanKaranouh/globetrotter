import '../styles/style.css'
const CampusItem = ({img, title, address})=>{
    return (
        <div className="menuItem">
            <div style={{ backgroundImage: `url(${img})` }}> 
            </div>
            
            <h1> {title} </h1>
            <p>  {address}  </p>
        </div>
    );
}

export default  CampusItem;