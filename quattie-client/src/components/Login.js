import React, { useRef } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
const fetch = require('node-fetch')

export default function Login({onSubmit}){
  const userRef = useRef()
  const passRef = useRef()

  function onLogin(username, password){
    const data = JSON.stringify({
      username: username,
      password: password 
    })


    let url = 'http://localhost:8080/login' 
    let options = {
      method: 'POST',
      //mode: 'cors',
      headers:{
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      },
      body: data
    }

    fetch(url, options).then((res) => { return res.json() })
    .then(
      json => { 
        //document.cookie=`token=${json}`;
        if(json.message == null){ onSubmit(json) }
        console.log(json);
      }
    )
  }

  function onSignup(username, password){
    const data = JSON.stringify({
      username: username,
      password: password,
      initial_deposit: 100
    })


    let url = 'http://localhost:8080/signup'
    let options = {
      method: 'POST',
      mode: 'cors',
      headers:{
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      },
      body: data
    }

    fetch(url, options)
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  return(
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" ref={userRef} placeholder="username" required/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" ref={passRef} placeholder="password" required/>
        </Form.Group>
        <Button type="submit" onClick={() => {console.log("login"); onLogin(userRef.current.value, passRef.current.value)}}>
          Login
        </Button>
        <Button type="submit" onClick={() => {console.log("signed up");onSignup(userRef.current.value, passRef.current.value)}}>
          Signup 
        </Button>
      </Form>
    </Container>
  )

}