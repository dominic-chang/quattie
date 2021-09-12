import React, { useRef, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import Wallet from './Wallet.js'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCoins, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

export default function Navbar({user, onSignout}) {

  const historyRef = useRef()
  const resizeIcon = () => {
    if(historyRef.current) {
      let w= `${20*historyRef.current.clientWidth}px`
      historyRef.current.style.fontSize = w
    }
  }

  return (
    <div className="col-3 Navbar" style={{ height:'100vh', display: 'flex', flexDirection:'column', justifyContent:'flex-start', alignItems: 'center'}}>
      <Wallet user={user}/>
      <Nav activeKey="/" style={{ height:'100%', display:'flex', flexDirection: 'column', justifyContent:'flex-start', alignItems:'center' }}>
        <Nav.Item>
          <Link className="nav-link" to="/history" title="History">
            <FontAwesomeIcon className="nav-icon" icon={faList} />
          </Link>
        </Nav.Item> 
        <Nav.Item>
          <Link className="nav-link" to="/transact" title="Transact">
            <FontAwesomeIcon className="nav-icon" icon={faCoins} />
            </Link>
        </Nav.Item> 
        <Nav.Item
          style={{ marginTop: 'auto' }}
        >
          <Link className="nav-link" to="/" onClick={onSignout} title="Sign out">
            <FontAwesomeIcon className="nav-icon" icon={faSignOutAlt} />
          </Link>
        </Nav.Item> 
      </Nav>
    </div>
  )
}
