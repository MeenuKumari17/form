import React from 'react';
import './home.css';

function Home({Logout}) {

  
  return (
    <div className='home'>
        <h2>Hello World</h2>
        <button onClick={Logout}>LOGOUT</button>
    </div>
  )
}

export default Home;