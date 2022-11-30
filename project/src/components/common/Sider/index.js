import React, {useState} from 'react'
import './style.css'
import { Link} from 'react-router-dom'

const SiderTab = (props)=>{
    
    const {link, name, customStyle, handleClick} = props

    return(
        <Link to={link}><li style = {customStyle} className = 'sider-content' onClick={handleClick}>{name}</li></Link>
    )

    
}

const Sider = () => {
    const [act, setAct] = useState('home')

    const customStyle = {

        styleHome: {
            backgroundColor: act==='home'?'rgb(227, 184, 54)':'',
            color: act==='home'?'rgb(102, 5, 182)':'rgb(171, 131, 188)'
        },

        styleCity: {
            backgroundColor: act==='cities'?'rgb(227, 184, 54)':'',
            color: act==='cities'?'rgb(102, 5, 182)':'rgb(171, 131, 188)'
        }
        
    }

    const clickHome = ()=>{
        return setAct('home')
    }

    const clickCity = ()=>{
        return setAct('cities')
    }

    return (
    <>
        <div className = 'sider-wrapper'>          
            <ul>
                <SiderTab link = '/' name = 'Home' customStyle = {customStyle.styleHome} handleClick = {clickHome} />
                <SiderTab link = 'cities' name = 'cities' customStyle = {customStyle.styleCity} handleClick = {clickCity} />
            </ul>
          
        </div>
    </>
    )
}

export default Sider;