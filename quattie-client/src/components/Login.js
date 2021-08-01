import React, { useRef, useState, useEffect } from 'react'
import { Form, Container, Button } from 'react-bootstrap'

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

    fetch(url, options).then(res => res.json())
    .then(
      json => { 
        document.cookie=`token=${json}`;
        console.log(json);
      }
    )
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit()
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
        <Button type="submit" onClick={() => {onLogin(userRef.current.value, passRef.current.value)}}>
          Login
        </Button>
        <Button type="submit" onClick={() => {onSignup(userRef.current.value, passRef.current.value,100)}}>
          Signup 
        </Button>
      </Form>
    </Container>
  )

}