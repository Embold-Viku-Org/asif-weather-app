import React, { useContext, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { popups } from '../../alert-msg';
import './addcitystyle.css'
import Button from '../button/Button'
import { Cities } from '../../city_list';
import { MyContext } from '../../context/Context';
import { AddCityWrap } from './addcity-style';

const AddCity = (props) => {

  const [close, setClose] = useState(false)
  const[searchText, setSearchText] = useState('')
  const {selectedCities, setSelectedCities} = useContext(MyContext)
  const {unselectedCities, setUnselectedCities}= useContext(MyContext)
  const {theme, setTheme} = useContext(MyContext)


  // useEffect(() => {
  //   setUnselectedCities(JSON.parse(window.localStorage.getItem('unselectedCities')));
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem('unselectedCities', JSON.stringify(unselectedCities));
  // }, [unselectedCities]);

  const handleInput = (e)=>{
    setSearchText(e.target.value)
    const searchList = Cities.filter(city=>!(selectedCities.includes(city)) && city.name.toLowerCase().includes(e.target.value))
    setUnselectedCities(searchList)
  }

  const btnStyle = {
    height: '40px',
    width: '40px',
    fontSize: '20px',
    background: 'none',
    border: 'none',
    color: 'red'
  }


  const handleClose = ()=>{
    const unsel = Cities.filter(city=>!(selectedCities.includes(city)))
    setUnselectedCities(unsel)
    setClose(prev=>!prev)
    props.onClose(close)

  }

  const handleFilter = (city)=>{

    popups('city added')
    if(!selectedCities.includes(city)){
      const selected = [...selectedCities, city]
      setSelectedCities(selected)
      const unselected = unselectedCities.filter(c => c!== city)
      setUnselectedCities(unselected)
    }
  }

  const handlePopup = (e)=>{
    if(e.path[0].className === 'city-popup'){
      handleClose()
    }
  }

  useEffect(()=>{
    document.body.addEventListener('click',handlePopup)
    return ()=>document.body.removeEventListener('click', handlePopup)
  })


  if(!close){
    return (
      <div className='city-popup'>
        <AddCityWrap mode = {theme}>
          <div className='add-city-header'>
            <h2>Add cities</h2>
            <Button name='&#x2715;' customStyle = {btnStyle} handleClick={handleClose} />
          </div>
          <div className='addcity-input'>
            <input placeholder='search...' onChange={handleInput}/>
          </div>
          <div className='cities-list'>
            <ul>
              {
                unselectedCities.map((city)=><li value={searchText} onClick={()=>handleFilter(city)}>{city.name}<button>&#x2B;</button></li>)
              }
            </ul>
            <ToastContainer />
          </div>
        </AddCityWrap>
      </div>
    )
  } 
}

export default AddCity;
