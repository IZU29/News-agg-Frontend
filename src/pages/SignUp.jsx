import React , {useState , useEffect} from 'react'
import axios from 'axios'

const SignUp = () => {
  const [username , setUsername] = useState()
  const [email , setEmail] = useState()
  const [password , setPassword] = useState()
  const [Error , setError] = useState()

  const postdata = async (e) => {
e.preventDefault()
    try{
      const signInData = {username , email, password}
      const response = await axios.post('http://localhost:3000/api/register' , signInData);
      localStorage.setItem('token' , response.data.token)
      // the token has no bearer !!!
      console.log("Success")
    }
    catch(error){
      setError("Something went wrong try again !!!")
      console.log(error)
    }
  }
  return (
    <div>
      <form action="" method="post"  onSubmit={postdata}>
        <div className="">
        <label htmlFor="" className="">Username:</label>
        <input type="text" className="border border-black" placeholder='username' onChange={(e) => {setUsername(e.target.value)}}/>
        </div>
        <div className="">
        <label htmlFor="" className="">Email:</label>
        <input type="text" className="border border-black" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="">
        <label htmlFor="" className="">Password:</label>
        <input type="text" className="border border-black" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button className="border border-black">Submit</button>
      </form>
    </div>
  )
}

export default SignUp
