import React from 'react'
import "./app.css"
import Test from './pages/Test'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {

  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/test' element={<Test/>} />
  </Routes>
 
 
  </BrowserRouter>
}
