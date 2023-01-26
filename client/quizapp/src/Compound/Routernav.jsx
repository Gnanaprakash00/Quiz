import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './Landing'
import Edit from './Edit'
import Edit2 from './Edit2'
const Routernav = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/edit' element={<Edit/>}></Route>
        <Route path='/edit2' element={<Edit2/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Routernav
