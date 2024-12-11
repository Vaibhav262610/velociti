import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserRegister from './pages/UserRegister'
import CaptainLogin from './pages/CaptainLogin'
import CaptainRegister from './pages/CaptainRegister'
import Error from './pages/Error'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/register' element={<UserRegister />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-register' element={<CaptainRegister />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App