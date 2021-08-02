import Login from './Login.js'
import Wallet from './Wallet.js'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [ jwt, setJwt ] = useState()
  /*
    Check to see if token is valid
    If valid, render the dashboad else go to login page
  */
 
  
  let temp = <Wallet jwt={jwt}/>
  if (jwt == null){
    temp = <Login onSubmit={setJwt}/>
  }
  return (
      temp
  );
}

export default App;
