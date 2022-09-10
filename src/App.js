import logo from './logo.svg';
import './App.css';
import React from 'react';


function App() {
  return (
    <div className="new-class">
     <h1 className='title'>Pratik Chakraborty</h1>
     <img src='https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
     <input className='name' placeholder='Enter your Name'/>
     <input className='email' placeholder='Enter your Email ID'/>
     <input className='phone' placeholder='Enter your Mobile Number'/>
    </div>
  );
}

export default App;
