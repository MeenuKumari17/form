import React, { useState } from 'react';
import './App.css';
import Login from './components/login/Login';

import Home from './components/home/Home'

function App() {

  const User = {
    name : "rohit",
    email : "rroo@gmail.com",
    password : "1234567890",
    number : "9876543210"
  }

  const [user, setUser] = useState({
    name: "",
    emailId: "",
    password: "",
    number: ""
  });

  const [messege, setMessege] = useState("");

  const Signin = details => {
    console.log(details);

    if (details.name === User.name && details.email === User.email && details.password === User.password && details.number === User.number){
      console.log("Logged in")
      setUser({
        name: details.name,
        email: details.email,
        password: details.password,
        number: details.number
      })
      
      
    } else{
      console.log("details does not match")
      setMessege("Details does not match!!")
    }
  }

  const Logout = () => {
    setUser({
      name: "",  
      email: "",
      password: "",
      number: ""
    })
  }

  return (
    <div className="App">

      {(user.email !== "") ? (
        <Home Logout={Logout}/>
      ) : (
        <Login Signin={Signin} messege={messege}/>
      )}

    </div>
    
  );
}

export default App;
