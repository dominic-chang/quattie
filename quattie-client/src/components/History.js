import React, { useState, useEffect } from 'react';
import { getUserHistory } from '../adapter/User.js';

export default function History({jwt}) {
  const [ history, setHistory ] = useState([])
  useEffect(() => {
    getUserHistory(jwt).then(json =>{
      setHistory(JSON.stringify(json["history"]))
    })
  })
  
  console.log("hist: "+history)
  return (
    <div>
      {history} 
    </div>
  )
}
