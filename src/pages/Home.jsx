import React , {useState , useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  const navigate = useNavigate()
  const [data, setData] = useState()
useEffect(() => {
  const getData = async () => {
  try{
  const token = localStorage.getItem('token')
  const response = await axios.get('http://localhost:3000/api/news' , {
    headers : {
      Authorization : `Bearer ${token}`
    }
  })
  const data = response.data
  setData(data)
  console.log(response.data)
}
catch(error){
  console.log(error)
}
getData()
}} , [])
  
  return (
    <div>
      <nav className="flex justify-between">
    <h1 className="">News_Agg</h1>
    <div className="w-[10%] flex justify-between">
      <button className="" onClick={() => navigate('/login')}>Login</button>
      <button className="" onClick={() => navigate('/signup')}>Signup</button>
    </div>
   </nav>
    </div>
  )
}

export default Home
