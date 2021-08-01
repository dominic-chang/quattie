import React, { useRef, useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'

export default function Login({onSubmit}){
  const userRef = useRef()
  const passRef = useRef()
  const [ isLogin, setIsLogin ] = useState(true)

  function onLogin(username, password){
    const data = JSON.stringify({
      username: username,
      password: password 
    })

    let url = isLogin ? 'http://localhost:8080/login' : 'http://localhost:8080/signup'

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
    onSubmit(true)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onLogin( userRef.current.value, passRef.current.value ) 
  }

  return(
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" ref={userRef} required/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" ref={passRef} required/>
        </Form.Group>
        <Button type="submit" onClick={() => {console.log(isLogin);setIsLogin(true)}}>
          Login
        </Button>
        <Button type="submit" onClick={() => {console.log(isLogin);setIsLogin(false)}}>
          Signup 
        </Button>
      </Form>
    </Container>
  )

}