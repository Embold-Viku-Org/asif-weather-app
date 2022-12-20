import React, {useContext, useState} from 'react'
import { SiderWrapper } from './sider-style'
import { Link} from 'react-router-dom'
import { MyContext } from '../../context/Context'
const SiderTab = (props)=>{
    
    const {link, name, customStyle, handleClick} = props

    return(
        <Link to={link}><li style = {customStyle} className = 'sider-content' onClick={handleClick}>{name}</li></Link>
    )

    
}

const Sider = () => {
    const [act, setAct] = useState('home')
    const {theme, setTheme } = useContext(MyContext)

    const customStyle = {

        styleHome: {
            backgroundColor: act==='home'? theme==='light'?'rgb(227, 184, 54)': 'lightgray' :'',
            color: act==='home'?'rgb(102, 5, 182)':'rgb(171, 131, 188)'
        },

        styleCity: {
            backgroundColor: act==='cities'? theme==='light'?'rgb(227, 184, 54)': 'lightgray' :'',
            color: act==='cities'?'rgb(102, 5, 182)':'rgb(171, 131, 188)'
        }
        
    }

    const clickHome = ()=>{
        return setAct('home')
    }

    const clickCity = ()=>{
        return setAct('cities')
    }

    console.log(theme)



    const handleTheme = ()=>{

        theme==='dark'?setTheme('light'):setTheme('dark')

    }

    return (
    <>
        <SiderWrapper mode = {theme}>
            <div className='tabs'>
                <ul>
                    <SiderTab link = '/' name = 'Home' customStyle = {customStyle.styleHome} handleClick = {clickHome} />
                    <SiderTab link = 'cities' name = 'cities' customStyle = {customStyle.styleCity} handleClick = {clickCity} />
                </ul>
            </div>          
            <div className='theme' onClick = {handleTheme}>
                Toggle
            </div>
          
        </SiderWrapper>
    </>
    )
}

export default Sider;