import React, {useState} from 'react';
import "./register.css"
import axios from "axios"
const Register = () => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
        cpassword: "",
        name: "",
    })
        const [error, setError] = useState(null); 
    const handleChange = (e) => {
        setInputs((prev) => ({...prev, [e.target.name]: e.target.value}))
    }
    const handleRegister = async (e) => {
        e.preventDefault();
        console.log("ok");
        try {
            await axios.post("http://localhost:8800/api/auth/register", inputs)
        } catch(error){
            setError(error.response.data);
        }
    }
    return(
        <div className = "register">
            <div className = "form">
            <h1>Sign up</h1>
            <form method = "POST">
                <label><strong>Username</strong></label>
                <input type = "text" placeholder = "Enter an username" name = "username" onChange = {handleChange}/>
                <label><strong>Password</strong></label>
                <input type = "password" placeholder = "Enter a password" name = "password" onChange = {handleChange}/>
                <label><strong>Confirm password</strong></label>
                <input type = "password" placeholder = "Confirm your password" name = "cpassword" onChange = {handleChange}/>
                <label><strong>Email</strong></label>
                <input type = "email" placeholder = "Enter your email" name = "email" onChange = {handleChange}/>
                <label><strong>Name</strong></label>
                <input type = "text" placeholder = "Enter your name" name = "name" onChange = {handleChange}/>
                {error}
                <button onClick = {handleRegister} className='submit-btn'>Register</button>
            </form>
            <p>You don't have an account?<span> <a href = "google.com">Register here</a></span></p>
            </div>
        </div>
    )
}

export default Register;