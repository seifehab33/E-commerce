import React from 'react';
import './App.css';
import Main from './Components/Main/Main';
import {BrowserRouter as Router , Routes , Route } from "react-router-dom"
import FilteredProduct from './Components/FilteredProduct/FilteredProduct';
import Navbar from './Components/Navbar/Navbar';
import SingleProduct from './Components/FilteredProduct/SingleProduct';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import { useSelector } from 'react-redux';
function App() {
  const user = useSelector((state)=>state.auth.user)
  const {authUser} = user
  console.log(user)
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={authUser ? <Main /> : <Login></Login>}
          />
          <Route exact path='/' element={<Login />}/>
          <Route exact path='/filteredProducts/:type' element={<FilteredProduct/>}/>
          <Route exact path='/filteredProducts/:type/:id' element={<SingleProduct/>}/>
        </Routes>
        <Footer/>
      </Router>
      </div>
  )
}

export default App;
