import React, { useRef } from 'react';
import { loginUser, signupUser } from '../adapter/User';
import { Form, Container, Button } from 'react-bootstrap';
const fetch = require('node-fetch');


export default function Login({onSubmit}){

  const userRef = useRef()
  const passRef = useRef()

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
        <Button 
          type="submit" 
          onClick={() => {
            console.log("login"); 
            loginUser(userRef.current.value, passRef.current.value)
              .then(
                json => { 
                  document.cookie=`token=${json}`;
                  if(json.message == null){ onSubmit(json) }
                  console.log(json);
                }
              )
          }}
        >
          Login
        </Button>
        <Button 
          type="submit" 
          onClick={() => {
            console.log("signed up");
            signupUser(userRef.current.value, passRef.current.value)
          }}>
          Signup 
        </Button>
      </Form>
    </Container>
  )

}