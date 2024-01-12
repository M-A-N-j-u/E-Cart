import './App.css'
import { Routes,Route, Navigate } from 'react-router-dom';

import WishList from './Pages/Wishlist';
import { Card } from 'react-bootstrap';
import View from './Pages/View';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Cart from './Pages/Cart'


function App() {

  return (
    <>
   

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/wishlist' element={<WishList/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/view/:id' element={<View/>}/>
      <Route path='/*' element={<Navigate to={'/'}/>}/>

    </Routes>

    <Footer/>
       
    </>
  )
}

export default App