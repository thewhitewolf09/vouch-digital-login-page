import React from 'react'
import "./login.css"
const Header = () => {
  return (
    <div className="header">
        <div className="title">
          <span>ATools</span><span style={{color: 'orange'}}>.</span>
        </div>
        <div className="joining-buttons">
          <button style={{backgroundColor: '#174661'}} >Start Free Trial</button>
          <button style={{backgroundColor: 'orange'}}>Login</button>
        </div>
    </div>
  )
}

export default Header