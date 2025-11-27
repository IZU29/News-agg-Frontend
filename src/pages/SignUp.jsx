import React , {useState , useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
 

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    preferences:{
    Categories : []
    }
    // country : 'us'   // 👈 array of selected categories
  });

  const [Error , setError] = useState()
  const navigate = useNavigate()
  const categoriesList = ["Business", "Health", "Education", "Culture" , "Technology"];
  
  const toggleCategory = (cat) => {
    setFormData((prev) => {
      const alreadySelected = prev.preferences.Categories.includes(cat);
      if (alreadySelected) {
        return {
          ...prev,
          preferences : { Categories: prev.preferences.Categories.filter((c) => c !== cat) },
        };
      } else {
        return {
          ...prev,
          preferences : { Categories: [...prev.preferences.Categories, cat] },
        };
      }
    });
  };


  const postdata = async (e) => {
e.preventDefault()
    try{
      console.log(formData)
      const response = await axios.post('http://localhost:3000/api/register' , formData);
      localStorage.setItem('token' , response.data.token)
      // the token has no bearer !!!
      console.log("Success")
      navigate('/')
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
        <input type="text" className="border border-black" placeholder='username' onChange={(e) => setFormData({...formData , username : e.target.value})}/>
        </div>
        <div className="">
        <label htmlFor="" className="">Email:</label>
        <input type="text" className="border border-black" placeholder='Email' onChange={(e) => setFormData({...formData , email : e.target.value})}/>
        </div>
        <div className="">
        <label htmlFor="" className="">Password:</label>
        <input type="text" className="border border-black" placeholder='password' onChange={(e) => setFormData({...formData , password : e.target.value})}/>
        </div>

        <h3>Select Categories</h3>
      <div className="flex flex-col gap-2">
        {categoriesList.map((cat) => (
          <label key={cat}>
            <input
              type="checkbox"
              value={cat.toLowerCase()}
              onChange={() => toggleCategory(cat.toLowerCase())}
            />
            {cat}
          </label>
        ))}
      </div>
        <button className="border border-black">Submit</button>
      </form>
    </div>
  )
}

export default SignUp
