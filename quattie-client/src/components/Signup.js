import React, {useRef} from 'react'
import { Container, Form, Button } from 'react-bootstrap'


export default function Signup({ onSubmit }) {
  const userRef = useRef()
  const passRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit( userRef.current.value, passRef.current.value)
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Usernam</Form.Label>
        <Form.Control type="text" ref={userRef} requied/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" ref={passRef} requied/>
      </Form.Group>
      </Form>
    </Container>
  )
}
