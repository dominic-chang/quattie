import Login from './Login.js';
import History from './History.js';
import Transact from './Transact.js';
import useCookie from '../hooks/useCookie.js';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { getUserInfo } from '../adapter/User.js';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function App() {
  const domain = 'localhost:3000' 

  const [ jwt, setJwt ] = useCookie('jwt')
  const [ user, setUser ] = useState({})

  useEffect(()=>{
    getUserInfo(jwt).then((user) => {
      setUser(user)
    }).catch((err) => {console.log(err);setUser({});setJwt()})
  }, [jwt])

  /*
    Check to see if token is valid
    If valid, render the dashboad else go to login page
  */
  function checkStatus(res) {
    if ( res.ok )  {
      return res
    } else {
      if( res.statusText == "Forbidden"){
        console.log("Access is forbidden")
        setJwt()
      }
      return res
    }
  }

 
  /*
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

    fetch(url, options).then(checkStatus)
    .then((res) => { return res.json() })
    .then((json) => {
      console.log(JSON.stringify(json));
      setUser(json);
    })
  }
  */
  
  let temp = (
    <Router >
      <Container style={{ margin: '0px 0px 0px 0px', padding: '0px 0px 0px 0px'}}>
        <div className="row container-fluid">
          <Navbar user={user}/>        
          <div className="col">
          <Switch>
            <Route path="/history">
              <History jwt={jwt}/>
            </Route>
            <Route path="/transact">
              <Transact user={user} jwt={jwt} onSubmit={(jwt) => getUserInfo(jwt)}/>
            </Route>
            <Route path="/">
              <History user={user}/>
            </Route>
          </Switch>
          </div>
        </div>
      </Container>
    </Router>
  )

  if (jwt == null ){
    console.log(window.location.href !== domain)
    if (window.location.href !== domain){
      console.log("no jwt, logging out")
      window.history.pushState({}, "", "http://localhost:3000")
    }
    return(<Login onSubmit={setJwt}/>)
  } else {
    console.log("jwt: " + jwt)
    return (
      temp
    );
  }
}

export default App;
