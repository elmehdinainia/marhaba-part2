import {React, useState} from 'react'
import image from '../assets/images.png'
import axios from 'axios'

export default function Login(){



  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
//   const [succes , setSucces] = useState(false)
//   const [error, setError] = useState(false)
  const [msg, setMsg] = useState("")



  const handleEmail = (e) => {
    return setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    return setPassword(e.target.value)
  }


  

  const API_URL = "http://localhost:6030/api/user/login"



  const loginHandler = async () => {
    const user = {
    
      email,
      password,
    
    }
    // console.log(user)
    
      const result = await axios.post(API_URL,user)
      .then((res) => {
        console.log(res)
        setMsg(res.data.msg)
        window.location.replace('');
      })
      .catch((err) => {
        console.log(err);
      })
    //   if(result.data.message){
    //     console.log("Bravo")
    //     // window.location.replace()
    //   }
    //   console.log(result.data.message);
    //   setSucces(result.data.message);
    //   error(false)
      

    // } catch (error) {
    //   console.log(error.data);
    //   // setSucces(error.data.message)
    //   // error(true)
    // }
  }

//  const verifyerror= async


  return (
    
   <div className="w-9/12" >
       <div 
        className='flex w-full justify-center items-center justify-center rounded-full' >
          <img className="h-48  rounded-full h-28" src={image} alt="" />
        </div>
  <form className="bg-white rounded px-8 pt-6 pb-8 mb-4 shadow-xl">
    <div className="bg-blue-500">
        {msg}
    </div>
     
    {/* <p className="text-green-500 text-center  my-5">{ succes && succes }</p> */}

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" name="email"  value={email} onChange={handleEmail}/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
      password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="password" name="password"  value={password} onChange={handlePassword}/>
    </div>
    <div class="flex items-start">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
                </div>
                <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <a href="/forgetpassword" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
        </div>



    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6 w-9/12 " type="button" onClick={loginHandler}>
        Sign In
      </button>
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    ©2020 Acme Corp. All rights reserved.
  </p>
</div>

  )
}

