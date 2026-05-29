import logo from './logo.svg';
import './App.css';
import './style.css'

import {BrowserRouter as Router , Routes , Route } 
          from 'react-router-dom'; 
import Footer from './components/Footer.js';
import NavBar from './components/NavBar.js';
import Home from './pages/Home.jsx';
import Explore  from './pages/Explore.jsx';
import BucketList  from './pages/BucketList.jsx';
import About  from './pages/About.jsx';

function App() {
  return (
    <>
    <Router>
        <NavBar/>
          <Routes>
            <Route path='/' exact Component={Home}>   </Route>
            <Route path='/Explore' exact Component={Explore}>   </Route>
            <Route path='/BucketList' exact Component={BucketList}>   </Route>
            <Route path='/About' exact Component={About}>   </Route>
          </Routes>  
        <Footer/>
      </Router>
    </>
  );
}

export default App;
