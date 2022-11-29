import React from 'react'
import Header from './components/common/Header/index.js'
import Sider from './components/common/Sider/index'
import './index.css'

const App = () => {
  return (
    <div className='outer-container'>
      <Sider />
      <div className = 'conside'>
        <Header />
        <p className = 'noth'>You have not selected any city as a favourite yet.</p>
      </div>
    </div>

  )
}

export default App;
