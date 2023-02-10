import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './Landing'

import Newedit2 from './Newedit2'
const Routernav = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/list' element={<Newedit2/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Routernav
