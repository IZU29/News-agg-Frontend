import { useState } from 'react'
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Home from '../src/pages/Home'
import Signin from '../src/pages/Signin'
import './App.css'

export default function App() {
  return (
   <>
   <nav className="">
    <h1 className="">News_Agg</h1>
   </nav>

   <div className="">
    <Router>  
      <Routes>
        <Route path = "/" element={<Home />}>Home</Route>
        <Route path = "/signin" element={<Signin />}>SignIn</Route>
      </Routes>
    </Router>
   </div>
   </> 
  )
}
