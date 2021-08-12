import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Container>
      <Nav activeKey="/">
        <Nav.Item>
          <Link className="nav-link" to="/wallet">Wallet</Link>
        </Nav.Item> 
        <Nav.Item>
          <Link className="nav-link" to="/transact">Send and Receive</Link>
        </Nav.Item> 
      </Nav>
    </Container>
  )
}
