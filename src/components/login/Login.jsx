import React, { useState } from 'react';
import './login.css';


const Login = ({ Signin, messege }) => {
  const [details, setDetails] = useState({name: "", email: "", password: "", number: ""});

const submitHandler = e => {
  
  e.preventDefault();
  Signin(details);

}

const resetData = () => {
  setDetails("");
}
   
  return (
    <div className='login'>
        <div className="loginBox">
           <form onSubmit={submitHandler}>
                <input 
                  name='name' 
                  type="text" 
                  className='LoginInput' 
                  placeholder='YOUR NAME' 
                  onChange={e => 
                            setDetails({
                              ...details, 
                              name: e.target.value
                            })} 
                  value={details.name}
                  />
                <input 
                  name='email' 
                  type="email" 
                  className='LoginInput' 
                  placeholder='EMAIL' 
                  onChange={e => 
                            setDetails({
                              ...details, 
                              email: e.target.value
                              })} 
                  value={details.email} 
                  />
                <input 
                  name='password' 
                  type="password" 
                  className='LoginInput' 
                  placeholder='PASSWORD' 
                  onChange={e => 
                            setDetails({
                              ...details, 
                              password: e.target.value
                              })} 
                  value={details.password} 
                  />
                <input 
                  name='number' 
                  type="number" 
                  className='LoginInput' 
                  placeholder='PHONE' 
                  onChange={e => 
                            setDetails({
                              ...details, 
                              number: e.target.value
                              })} 
                  value={details.number}
                  />
                <button 
                  className='reset' 
                  type='reset' 
                  onClick={resetData}
                  >
                    RESET
                  </button>
                <button 
                  className='register' 
                  type='submit'
                  >
                    REGISTER
                  </button>
                {(messege !== "") ? ( <div className="messege">{messege}</div> ) : ""}
            </form>
        </div>
    </div>
  )
}

export default Login;