import React from 'react'
import './Button.css'

const Button = (props)=>{
    const {name, customStyle, handleClick} = props

    return(
        <button style = {customStyle} onClick={handleClick}>{name}</button>
    )
}
export default Button
