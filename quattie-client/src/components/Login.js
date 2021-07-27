import React, { useRef } from 'react'
import { Form, Container, Button } from 'react-bootstrap'

export default function Login({ onSubmit }){
  const userRef = useRef()
  const passRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit( userRef.current.value, passRef.current.value )
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
        <Button type="submit">
          Login
        </Button>
      </Form>
    </Container>
  )

}