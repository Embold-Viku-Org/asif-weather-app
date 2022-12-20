import React from 'react'
import Sider from './components/common/Sider/index'
import './index.css'
import {CustomContext} from './components/context/Context'
import AppRoute from './components/app-route/AppRoute'

const App = () => {
  return (

      <div className='outer-container'>
        <Sider />
        <div className = 'conside'>
          
            <AppRoute />
          
        </div>
      </div>

  )
}

export default App;


