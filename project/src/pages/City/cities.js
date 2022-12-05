import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { popups } from '../../components/alert-msg';
import AddCity from '../../components/common/add-city/AddCity';
import './cities.css'
import { MyContext } from '../../components/context/Context';

import { Cities } from '../../components/city_list';
import { CityPage } from './citystyle';
import { ThemeConsumer } from 'styled-components';

const City = ()=>{
    const [show, setShow] = useState(false)
    const {cityDesc, setCityDesc} = useContext(MyContext)
    const {selectedCities, setSelectedCities} = useContext(MyContext)
    const {favCities, setFavCities} = useContext(MyContext)
    const {theme, setTheme} = useContext(MyContext)

    const handlePopup=(close)=>{
        setShow(prev=>!prev)
    }


    const context = useContext(MyContext)
    const selCities = Cities.filter(city=>context.selectedCities.includes(city))

    const handleCityDesc = (city)=>{
        const c = selectedCities.filter(ob=>ob.id === city.id)
        city.is_checked = c[0].is_checked
       
        setCityDesc(city)
    }

    const handleCheck = ()=>{
       
        const city = selectedCities.filter(c=>c.id === cityDesc.id)
        city[0].is_checked = !cityDesc.is_checked
        const slt = selectedCities.filter(ob=>ob != cityDesc)
        const tmp = [...slt, city[0]]
        if(city[0].is_checked===true){
            popups('city added to favorite list')
            setFavCities([...favCities, city[0]])
        }
        else{
            const fav = favCities.filter(ob=>ob != city[0])
            setFavCities(fav)
        }
        setSelectedCities(tmp) 
    }
   
    return(
        <CityPage mode = {theme}>
            <div className="city-content">
                <div className='city-header'>
                    <h2>Cities</h2>
                    <button onClick={handlePopup}>&#43;</button>
                </div>
                <hr />
                <div className='city-init'>{
                    selCities.length===0?<p>You haven't selected any city</p>
                    :<ul className='city-selected'>
                        {
                            selCities.map(city=><li onClick={()=>handleCityDesc(city)}><p>{city.name}</p><p>{city.temp}</p></li>)
                        }
                    
                    </ul>
                    }
                </div>
                {
                    show&&<AddCity onClose = {handlePopup}  />
                    
                }
            </div>
            {
                Cities.includes(cityDesc) &&
            <div className='city-desc'>
                <div className='city-desc-header'>
                    <h2>{cityDesc.name}</h2>
                    <input id="star1" className="star" type="checkbox" checked={cityDesc.is_checked} onClick={handleCheck}/>

                </div>
                <hr />
                <div className='city-desc-content'>
                    <div className='city-desc-content-inner'>
                        <p id='description'>{cityDesc.desc}</p>
                        <br />
                        <p className='inner-det'><span>Temperature : </span>{cityDesc.temp}</p>
                        <p className='inner-det'><span>Humidity : </span>{cityDesc.humidity}</p>
                    </div>
                </div>

            </div>
            }  
            <ToastContainer />         
        </CityPage>
    )
}

export default City;