import { Container, Badge } from 'react-bootstrap'

export default function Wallet({user}) {

  const { balance, username, pending_requests } = user
  return (
    <Container>
      <h1>
        {`Welcome ${username}`}
      </h1>
      <Badge bg="secondary">
        {`$${balance}`}
      </Badge>
    </Container>
  )
}
