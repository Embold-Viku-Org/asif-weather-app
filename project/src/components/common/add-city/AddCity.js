import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { popups } from '../../alert-msg';
import './style.css'
import Button from '../button/Button'
import { Cities } from '../../city_list';

const AddCity = (props) => {

  const [close, setClose] = useState(false)
  const[searchText, setSearchText] = useState('')
  const [selectedCities, setSelectedCities] = useState([])
  const [unselectedCities, setUnselectedCities] = useState(Cities)

  // useEffect(() => {
  //   setUnselectedCities(JSON.parse(window.localStorage.getItem('unselectedCities')));
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem('unselectedCities', JSON.stringify(unselectedCities));
  // }, [unselectedCities]);

  const handleInput = (e)=>{
    console.log(e.target.value)
    setSearchText(e.target.value)
    const searchList = Cities.filter(city=>city.name.toLowerCase().includes(e.target.value)&& (!selectedCities.includes(city)))
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
    setClose(prev=>!prev)
    props.onClose(close)

  }

  const handleFilter = (city)=>{

    if(!selectedCities.includes(city)){
      const selected = [...selectedCities, city]
      setSelectedCities(selected)
      const unselected = unselectedCities.filter(c => c!== city)
      setUnselectedCities(unselected)
    }
  }

  if(!close){
    return (
      <div className='city-popup'>
        <div className='add-city-wrap'>
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
                unselectedCities.map((city)=><li value={searchText} onClick={()=>handleFilter(city)}>{city.name}<button onClick={()=>popups()}>&#x2B;</button></li>)
              }
            </ul>
            <ToastContainer />
          </div>
        </div>
      </div>
    )
  } 
}

export default AddCity;
