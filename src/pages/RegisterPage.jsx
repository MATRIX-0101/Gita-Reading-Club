import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate("/loginPage");
    }
  return (
    <div>
      <div className="container1">
        <div className="wrapper">
            <form action="">
                <h1>Register</h1>
                <div className="input-box">
                    <input id='username' type="text" placeholder='Enter Your Name' required/>
                </div>
                <div className="input-box">
                    <input id='email' type="email" placeholder='Enter Your Email' required/>
                </div>
                <div className="input-box">
                    <input id='phoneNumber' type="text" placeholder='Enter Your Contact Number +91' required/>
                </div>
                <div className="input-box">
                    <input id='password' type="password" placeholder='Enter Password' required/>
                </div>
                <div className="input-box">
                    <input id='password' type="password" placeholder='Re-Enter Password' required/>
                </div>
                <div className="input-box">
                    <input id='registration' type="text" placeholder='Enter Your Registration Number' required/>
                </div>
                <div className="input-box" id="select-btn">
                        <div className="year">
                          <select className="select" placeholder="Option" name="year" required>
                            <option>Year</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                          </select>
      
                        </div>
                        <div className="hostel">
                          <select className="select" placeholder="Hostel" name="hostel" required>
                            <option>Hostel</option>
                            <option value="SVBH">SVBH</option>
                            <option value="Tandon">Tandon</option>
                            <option value="Patel">Patel</option>
                            <option value="Malviya">Malviya</option>
                            <option value="Tilak">Tilak</option>
                            <option value="Raman">Raman</option>
                            <option value="PGHostel">PG Hostel</option>
                            <option value="KNGH">KNGH</option>
                            <option value="DJ">DJ</option>
                            <option value="Sarojininaidu">Sarojini Naidu</option>
                          </select>
      
                        </div>
                </div>

                {/* <div className="remember-forgot">
                    <label>
                        <input type="checkBox"/>Remember me
                    </label>
                </div> */}

                <button type='submit' className='submit-btn'>Register</button>
                <div className="login-link">
                    <p>Already have account? <a href='/loginPage' onClick={()=>{handleClick()}}>Login</a></p>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}
