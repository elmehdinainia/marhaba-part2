import React from 'react';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import './App.css';
import Background from './components/background.jsx'
import Register from './components/register';
import Error404 from './components/Error404'
import Forgetpassword from './components/ForgPassword.jsx'
import Home from './components/hme'
import Ressetpassword from './components/Ressetpassword'
import Layout from './components/Layout'
import Login from './components/login';


function App() {
  return (
    <Router>
    
 

    <Routes>
   <Route element = {<Layout />}>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/Ressetpassword/:token'  element={<Ressetpassword />}/>
        <Route path='/'  element={<Home />}/>
        <Route path='/forgetpassword' element={<Forgetpassword/>}/>
   </Route>
    <Route path='/*'  element={<Error404 />}/>
    



    </Routes>
  

    
    </Router>
  )
}

export default App;
