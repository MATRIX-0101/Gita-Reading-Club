import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/login.css'
export default function LoginPage() {
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate("/registerPage");
    }
  return (
    <>
    <div>
      <div className="container">
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input id='username' type="text" placeholder='Username' required/>
                </div>
                <div className="input-box">
                    <input id='password' type="password" placeholder='Password' required/>
                </div>

                <div className="remember-forgot">
                <label>
                    <input type="checkBox"/>Remember me
                </label>
                <a href='/' >Forgot Password?</a>
                </div>

                <button type='submit' className='submit-btn'>Login</button>
                <div className="register-link">
                    <p>Don't have an account? <a href='/registerPage' onClick={()=>{handleClick()}}>Register</a></p>
                </div>
            </form>
        </div>
      </div>
    </div>
    </>
  )
}





