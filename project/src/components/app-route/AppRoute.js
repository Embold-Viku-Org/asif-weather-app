import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home/home'
import City from '../../pages/City/cities'

export default function AppRoute() {
  return (
    <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = 'cities' element = {<City />} />
    </Routes>
  )
}
