import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './App.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
//components  
import Home from './Component/Home';                                
// import Places from './Component/Places' ;     
// import Segula from './Component/Segula' ; 
// import Prayer from './Component/Prayer' ; 
// import Dashbord from './Component/Dashbord' ;   
// import Login from './Component/Login' ;     
// import Messenger from './Component/Massenger' ; 
// import Menager from './Component/Menager' ;  
// import MyPrayers from './Component/MyPrayers' ;   
// import Place from './Component/Place' ;     
// import Stories from './Component/Stories' ; 
// import Story from './Component/Story' ;  



function App() {
  return (
<div className="App">
  {/* <Router>  
    <div className='nav'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/Places'>Places</NavLink>
        <NavLink to='/Segula'>Segula</NavLink>
        <NavLink to='/Prayer'>Prayer</NavLink>
        <NavLink to='/Dashbord'>Dashbord</NavLink>
        <NavLink to='/Messenger'>Messenger</NavLink>
        <NavLink to='/Login'>Login</NavLink>
        <NavLink to='/Menager'>Menager</NavLink>
        <NavLink to='/MyPrayers'>MyPrayers</NavLink>
        <NavLink to='/Place'>Place</NavLink>
        <NavLink to='/Stories'>Stories</NavLink>
        <NavLink to='/Story'>Story</NavLink>
    </div>
           
    <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/Places' element={<Places/>}></Route>
        <Route exact path='/Segula' element={<Segula/>}></Route>
        <Route exact path='/Prayer' element={<Prayer/>}></Route>
        <Route exact path='/Dashbord' element={<Dashbord/>}></Route>
        <Route exact path='/Messenger' element={<Messenger/>}></Route> 
        <Route exact path='/Login' element={<Login/>}></Route>
        <Route exact path='/Menager' element={<Menager/>}></Route>
        <Route exact path='/MyPrayers' element={<MyPrayers/>}></Route>
        <Route exact path='/Place' element={<Place/>}></Route>
        <Route exact path='/Stories' element={<Stories/>}></Route>
        <Route exact path='/Story' element={<Story/>}></Route>
        <Route path='*' element={<h1> 404 Page not found</h1>} />
    </Routes>
  </Router>  */}
     <Home/>
</div>
  );
}

export default App;
