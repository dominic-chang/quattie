import { Container } from 'react-bootstrap';
import { useRef } from 'react';

export default function Wallet({user}) {

  const profilePicRef = useRef()
  const { balance, username } = user

  return (
    <Container style={{ marginBottom: '2rem', padding: '0px' }}>
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
      <div className="cash-balance" >
        {`${balance?.toLocaleString('en-IN',{ style: 'currency', currency: 'USD'})}`}
      </div>
    </Container>
  )
}
