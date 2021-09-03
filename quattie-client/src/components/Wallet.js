import { Container } from 'react-bootstrap';
import { useRef } from 'react';

export default function Wallet({user}) {

  const profilePicRef = useRef()
  const { balance, username } = user

  return (
    <Container style={{ marginBottom: '20px', padding: '0px' }}>
      <div 
        className="profile-pic"
        style={{ 
          boderColor: 'white', 
          backgroundColor: 'white', 
          margin: 'auto',
          display:'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }} 
        ref={profilePicRef}
      >
        {`${username?.[0]}`}
      </div>
      <br/>
      <div className="cashBalance" >
        {`$${balance?.toLocaleString()}`}
      </div>
    </Container>
  )
}
