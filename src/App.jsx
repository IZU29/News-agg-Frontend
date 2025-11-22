import { useState } from 'react'
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Home from '../src/pages/Home'
import SignUp from './pages/SignUp'
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
        <Route path = "/signup" element={<SignUp />}>SignIn</Route>
        <Route path = "/login" element={<Login />}>LogIn</Route>
      </Routes>
    </Router>
   </div>
   </> 
  )
}
