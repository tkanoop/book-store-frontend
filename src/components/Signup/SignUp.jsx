import './SignUp.css'
import {Link,useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


const SignUp=()=> {
    const [data,setData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""

    })

    const [error,setError]=useState("")
    const navigate=useNavigate()



    const handleChange=(e)=>{
        const {name,value}=e.target
        setData({...data,[name]:value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            const url='http://localhost:8000/api/users'
            const {data:res}=await axios.post(url,data)
            navigate("/login")
            console.log(res.message);
            
        } catch (error) {
            if(error.response && error.response.status>=400&&
                error.response.status<=500){
                    setError(error.response.data.message)

                }
            
        }
    }
 
  return (
    <div className='signup_container'>
        <div className='signup_form_container'>
            <div className='left'>
                <h1>Welcome Back</h1>
                <Link to="/login">
                    <button type='button' className='white_btn'>
                        Sign in
                    </button>

                </Link>
            </div>
            <div className='right'>
                <form className='form_container' onSubmit={handleSubmit}>
                    <h1>Create Account</h1>
                    <input 
                    type='text'
                    placeholder='First Name'
                    name='firstName'
                    onChange={handleChange}
                    value={data.firstName}
                    required
                    className='input'
                    />
                      <input 
                    type='text'
                    placeholder='Last Name'
                    name='lastName'
                    onChange={handleChange}
                    value={data.lastName}
                    required
                    className='input'
                    />
                      <input 
                    type='email'
                    placeholder='Email'
                    name='email'
                    onChange={handleChange}
                    value={data.email}
                    required
                    className='input'
                    />
                      <input 
                    type='password'
                    placeholder='Password'
                    name='password'
                    onChange={handleChange}
                    value={data.password}
                    required
                    className='input'
                    />
                    {error && <div className='error_msg'>{error}</div>}
                    <button className='green_btn' type='submit'>
                        Sign Up
                    </button>
                </form>

            </div>
        </div>
    </div>
  )
}

export default SignUp