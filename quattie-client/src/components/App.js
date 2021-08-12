import Login from './Login.js';
import Wallet from './Wallet.js';
import Transact from './Transact.js';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const domain = 'localhost:3000' 

  const [ jwt, setJwt ] = useState()
  const [ user, setUser ] = useState({})

  useEffect(()=>{
    getUserInfo(jwt)
  }, [jwt])

  /*
    Check to see if token is valid
    If valid, render the dashboad else go to login page
  */
 
  function getUserInfo(jwt) {
    const url = "http://localhost:8080/wallet"
    const bearer = `Bearer ${jwt}`
    const options = {
      method: 'GET',
      mode: 'cors',
      headers:{
        'authorization': bearer,
        'Content-Type': 'application/json'
      },
    }

    fetch(url, options).then((res) => { return res.json() })
    .then((json) => {
      console.log(json);
      setUser(json);
    })
  }
  
  let temp = (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/wallet">        
          <Wallet user={user} />
        </Route>
        <Route path="/transact">
          <Transact user={user} jwt={jwt}/>
        </Route>
      </Switch>
    </Router>
  )
  if (jwt == null){
    console.log(window.location.href !== domain)
    if (window.location.href !== domain){
      console.log("no jwt, logging out")
      window.history.pushState({}, "", "http://localhost:3000")
    }
    return(<Login onSubmit={setJwt}/>)
  } else {
  return (
      temp
  );
  }
}

export default App;
