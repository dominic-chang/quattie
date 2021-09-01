import { Container, Badge } from 'react-bootstrap';
import { useState, useRef, useEffect } from 'react';

export default function Wallet({user}) {

  const profilePicRef = useRef()
  const { balance, username } = user

  /*
  const resizeProfilePic = () => {
    if(profilePicRef.current) {
      let w = `${profilePicRef.current.clientWidth}px`
      profilePicRef.current.style.height = w
      profilePicRef.current.style.borderRadius = [w,w,w,w].join(" ")
      profilePicRef.current.style.fontSize = w
      profilePicRef.current.style.lineHeight = `${profilePicRef.current.clientWidth * .5 / .6 }px`
    }
  }
  useEffect(resizeProfilePic,[profilePicRef])
  window.addEventListener("resize",resizeProfilePic)
  window.addEventListener("load",resizeProfilePic)

  */

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
