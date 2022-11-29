import React, {useState} from 'react'
import './style.css'

const SiderTab = (props)=>{
    
    const {name, customStyle, handleClick} = props

    return(
        <div className = 'sider-content' style={customStyle} onClick={handleClick}>{name}</div>
    )
}

const Sider = () => {
    const [act, setAct] = useState('home')

    const customStyle = {

        styleHome: {
            backgroundColor: act==='home'?'rgb(227, 184, 54)':'',
            color: act==='home'?'rgb(102, 5, 182)':''
        },

        styleCity: {
            backgroundColor: act==='cities'?'rgb(227, 184, 54)':'',
            color: act==='cities'?'rgb(102, 5, 182)':''
        }
        
    }

    const clickHome = ()=>{
        console.log('Home')
        return setAct('home')
    }

    const clickCity = ()=>{
        console.log('cities')
        return setAct('cities')
    }

    return (
    <>
        <div className = 'sider-wrapper'>
            <SiderTab name = 'Home' customStyle = {customStyle.styleHome} handleClick={clickHome} />
            <SiderTab name = 'cities' customStyle = {customStyle.styleCity} handleClick={clickCity} />
        </div>
    </>
    )
}

export default Sider;