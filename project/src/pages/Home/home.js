import React, {useContext, useState} from 'react'
import AddCity from '../../components/common/add-city/AddCity';
import Button from '../../components/common/button/Button';
import { ContentWrap, HeaderWrap } from './homestyle';
// import './home.css'
import 'react-toastify/dist/ReactToastify.css';
import { MyContext } from '../../components/context/Context';
import { popups } from '../../components/alert-msg';
import { ToastContainer } from 'react-toastify'

const FavListAdd = ({city, checkClick})=>{
    return(
                    
        <div className='fav-items'>
            <div className='fav-list-header'>
                <h4>{city.name}</h4>
                <input id="star1" className="star" type="checkbox" checked={city.is_checked} onClick={checkClick}/>

            </div>
            <div className='fav-item-cont'>
                    {city.desc}
            </div>
            <div className='fav-item-des'>
                <span>Temperature : </span>{city.temp}<br></br>
                <span>Humidity : </span>{city.humidity}
            </div>
        </div>
    )
}



const Home = ()=>{

    const [show, setShow] = useState(false)
    const {selectedCities, setSelectedCities, theme, favCities, setFavCities} = useContext(MyContext)
    const customStyle = {
        border: 'none',
        height: '40px',
        width: '150px',
        backgroundColor: theme==='light'?'blueviolet': 'gray',
        color: 'white',
        fontSize: '17px'
    }
    
    const handleClick = ()=>{
        setShow(prev=>!prev)
    }

    const handlePopup=(close)=>{
        if(!close){
            setShow(false)
        }
    }

    const handleFav = (ct)=>{
        popups(`${ct.name} removed`)
        const city = selectedCities.filter(c=>c.id === ct.id)
        console.log(city)
        city[0].is_checked = !ct.is_checked
        const slt = selectedCities.filter(ob=>ob != ct)
        const tmp = [...slt, city[0]]
        if(city[0].is_checked===true){
            setFavCities([...favCities, city[0]])
        }
        else{
            const fav = favCities.filter(ob=>ob != city[0])
            setFavCities(fav)
        }
        setSelectedCities(tmp) 
    }

    return(
        <div className='home-wrap'>
            <HeaderWrap mode={theme}>
                <div className = 'h1-text'>
                    <h1>My favorite cities</h1>
                </div>
                <div>
                    <Button name = 'Add New City' customStyle = {customStyle} handleClick = {handleClick} />
                </div>
            </HeaderWrap>

            <ContentWrap mode={theme}>
                <div className='fav-list'>
                {favCities.length === 0?<div className='no-fav'>You haven't selected any favorite cities!</div>:
                
                favCities.map(city=><FavListAdd city = {city} checkClick={()=>handleFav(city)} />)
                
                }
                </div>
                {
                    show&&<AddCity onClose = {handlePopup}  />
                    
                }
            </ContentWrap>
            <ToastContainer />
        </div>
    )  
}

export default Home;