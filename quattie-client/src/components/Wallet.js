import React, { useState }from 'react'
import { Container } from 'react-bootstrap'
const fetch = require('node-fetch')

export default function Wallet({jwt}) {

  const [ balance, setBalance ] = useState()

  function getBalance(jwt) {
    const url = 'http://localhost:8080/wallet' 
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
    .then((json) => {setBalance(json['balance'])})
  }
  getBalance(jwt)
  return (
    <Container>
      {balance}
    </Container>
  )
}
