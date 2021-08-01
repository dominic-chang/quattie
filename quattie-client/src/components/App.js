import Login from './Login.js'
import Wallet from './Wallet.js'
import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const fetch = require('node-fetch')



function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  /*
    Check to see if token is valid
    If valid, render the dashboad else go to login page
  */
 
  const temp = isLoggedIn ? <Wallet/> : <Login onSubmit={() => setIsLoggedIn(true)}/>
  return (
      temp
  );
}

export default App;
