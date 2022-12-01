import React from 'react'
import Sider from './components/common/Sider/index'
import './index.css'
import {Routes, Route} from 'react-router-dom'
import City  from './pages/cities.js'
import Home from './pages/home.js'

const App = () => {
  return (
    <div className='outer-container'>
      <Sider />
      <div className = 'conside'>
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = 'cities' element = {<City />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;


