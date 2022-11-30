import React from 'react'

const Button = (props)=>{
    const {name, customStyle, handleClick} = props

    return(
        <button style = {customStyle} onClick={handleClick}>{name}</button>
    )
}

export default Button