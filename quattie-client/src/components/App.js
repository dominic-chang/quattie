import Login from './Login.js'
import useLocalStorage from '../hooks/useLocalStorage'
import React, { useState } from 'react'
const fetch = require('node-fetch')




function App() {
  const [jwt, setjwt] = useState('jwt')

  /*
  Check to see if token is valid
  If valid, render the dashboad else go to login page
  
  */
  return (
    <Login onSubmit={(username, password) =>{
      const data = JSON.stringify({
        username: username,
        password: password 
      })

      let url='http://localhost:8080/login'
      
      let options = {
        method: 'POST',
        mode: 'cors',
        headers:{
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(data)
        },
        body: data
      }

      fetch(url, options).then(res => res.json())
      .then(
        json => { 
          document.cookie=`token=${json}`;
          console.log(json);
        }
      )
    }}/>
    );
}

export default App;
