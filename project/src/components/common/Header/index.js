import React from 'react'
import Button from '../button/Button.js'
import './style.css'

const Header = ()=>{

  const customStyle = {
    border: 'none',
    height: '40px',
    width: '150px',
    backgroundColor: 'blueviolet',
    color: 'white',
    fontSize: '17px'
  }

  const handleClick = ()=>{
    console.log('Button is clicked')
  }
  
  return(
    <div className = 'header-wrapper'>
      <div className = 'h1-text'>
        <h1>My favourite cities</h1>
      </div>
      <div>
        <Button name = 'Add New City' customStyle = {customStyle} handleClick = {handleClick} />
      </div>
    </div>
  )  
}

export default Header;