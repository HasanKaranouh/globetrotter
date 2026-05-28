import logo from './logo.svg';
import './App.css';
import './style.css'

import {BrowserRouter as Router , Routes , Route } 
          from 'react-router-dom'; 
import Footer from './components/Footer.js';
import NavBar from './components/NavBar.js';
import Home from './pages/Home.jsx';
import About  from './pages/About1.jsx';
import Campuses  from './pages/Campuses.jsx';

function App() {
  return (
    <>
    <Router>
        <NavBar/>
          <Routes>
            <Route path='/' exact Component={Home}>   </Route>
            <Route path='/About' exact Component={About}>   </Route>
            <Route path='/Campuses' exact Component={Campuses}>   </Route>
          </Routes>  
        <Footer/>
      </Router>
    </>
  );
}

export default App;
