import React, {useState,} from 'react';
import axios from "axios"

const Login = () => {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    })
    const [error, setError] = useState(null);
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value; 
        setInputs((prev) => ({...prev, [name]: value})
        )
    }
    const handleRegister = async (e) => {
        e.preventDefault();
        try{
            await axios.post("http://localhost:8800/api/auth/login", inputs);
        }catch(error)
        {
            setError(error.response.data);
        }
    }
  return (
    <div className = "register">
    <div className = "form">
    <h1>Login</h1>
    <form method = "POST">
        <label><strong>Username</strong></label>
        <input type = "text" placeholder = "Enter your username" name = "username" onChange = {handleChange}/>
        <label><strong>Password</strong></label>
        <input type = "password" placeholder = "Enter your password" name = "password" onChange = {handleChange}/>
        { error }
        <button onClick = {handleRegister} className='submit-btn'>Login</button>
    </form>
    <p>You don't have an account?<span> <a href = "/register">Register here</a></span></p>
    </div>
</div>

  )
}

export default Login