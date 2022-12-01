import React, {useState} from 'react'
import AddCity from '../components/common/add-city/AddCity'
import Button from '../components/common/button/Button'
import './home.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { popups } from '../components/alert-msg';

const Home = ()=>{

    const [show, setShow] = useState(false)
    const customStyle = {
    border: 'none',
    height: '40px',
    width: '150px',
    backgroundColor: 'blueviolet',
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

    return(
    <div className='home-wrap'>
        <div className = 'header-wrapper'>
            <div className = 'h1-text'>
                <h1>My favorite cities</h1>
            </div>
            <div>
                <Button name = 'Add New City' customStyle = {customStyle} handleClick = {handleClick} />
            </div>
        </div>
        <div className='content-wrap'>
            <div className='not-fav'>You have not selected any favorite city</div>
            {
                show&&<AddCity onClose = {handlePopup}  />
                
            }
        </div>
    </div>
    )  
}

export default Home;