import { useState } from 'react'
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import Home from '../src/pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import './App.css'

export default function App() {
  // const navigate = useNavigate()
  return (
   <>

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
