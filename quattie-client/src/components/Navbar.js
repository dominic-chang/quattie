import React, { useRef, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import Wallet from './Wallet.js'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCoins} from '@fortawesome/free-solid-svg-icons'

export default function Navbar({user}) {

  const historyRef = useRef()
  const resizeIcon = () => {
    if(historyRef.current) {
      let w= `${20*historyRef.current.clientWidth}px`
      historyRef.current.style.fontSize = w
    }
  }
  return (
    <div className="col-3 Navbar">
      <Wallet user={user}/>
      <Nav activeKey="/">
        <Nav.Item className="container-fluid" 
          style={{ padding: '0rem' }}
        >
          <Link className="nav-link" to="/history">
            <FontAwesomeIcon className="nav-icon" icon={faList} />
          </Link>
        </Nav.Item> 
        <Nav.Item className="container-fluid">
          <Link className="nav-link" to="/transact">
            <FontAwesomeIcon className="nav-icon" icon={faCoins} />
            </Link>
        </Nav.Item> 
      </Nav>
    </div>
  )
}
