import React, { useRef } from 'react';
import { Form, Container, Button } from 'react-bootstrap';


export default function Transact({user, jwt}) {
  const userRef = useRef()
  const amountRef = useRef()

  function sendMoney(jwt) {
    const url = "http://localhost:8080/transact"
    const bearer = `Bearer ${jwt}`
    const options = {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({ taker_name:userRef.current.value, amount:parseFloat(amountRef.current.value), trans_type:'send'}),
      headers:{
        'authorization': bearer,
        'Content-Type': 'application/json'
      }
    }

    fetch(url, options).then((res) => {return res.json()}).then(json => {console.log(json)})
  }

function requestMoney(jwt) {
    const url = "http://localhost:8080/transact"
    const bearer = `Bearer ${jwt}`
    const options = {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({ taker_name:userRef.current.value, amount:parseFloat(amountRef.current.value), trans_type:'request'}),
      headers:{
        'authorization': bearer,
        'Content-Type': 'application/json'
      }
    }

    fetch(url, options).then((res) => {return res.json()}).then(json => {console.log(json)})
  }
  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>
            Username
          </Form.Label>
          <Form.Control type="text" ref={userRef}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Amount
          </Form.Label>
          <Form.Control type="text" ref={amountRef}/>
        </Form.Group>
        <Button onClick={()=>sendMoney(jwt)}>Send</Button>
        <Button>onClick={()=>requestMoney(jwt)}>Request</Button>
      </Form>
    </Container>
  )
}
