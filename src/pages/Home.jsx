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
  console.log(token)
  const response = await axios.get('http://localhost:3000/api/news' , {
    headers : {
      Authorization : `Bearer ${token}`
    }
  })
  const newData = response.data
  setData(newData)
  console.log(response.data)
}
catch(error){
  console.log(error)
}
}
getData()
} , [])
  
  return (
    <div>
      <nav className="flex justify-between">
    <h1 className="">News_Agg</h1>
    <div className="w-[10%] flex justify-between">
      <button className="" onClick={() => navigate('/login')}>Login</button>
      <button className="" onClick={() => navigate('/signup')}>Signup</button>
    </div>
   </nav>
   <div className="">
    {/* The Search Bar will be present here */}
    <div className="">
      <input type="text" className="border m-auto" placeholder='Search'/>
    </div>
    {/* The News Seperated by Category will be present here */}
    <div className="">
      {
        Object.entries(data.NewsApi).map(([key , value]) => ( 
          <div className="flex flex-col" key={key}>
          <h1 className="">{key}:</h1>
          <div className="flex flex-wrap">           
          {
            value.map((news) => (
              <div className="w-[150px]">
              <img src={news.urlToImage} alt="" className="w-[40px] h[40px]" />
              <h2 className="text-xs text-wrap">{news.title}</h2>
              </div>
            ))
          }
          </div>
          </div>
        ))
      }
    </div>
   </div>
    </div>
  )
}

export default Home
