import Beirut from '../assets/Beirut.jpg'

const Home = () =>{
   const handleImageClick = () => {
    alert('You clicked the Beirut image!');
  };

return (
    <>
        <h1>This is the Home Page</h1>
        <img src={Beirut} onClick={handleImageClick}/>
    </>
);
}
export default Home;