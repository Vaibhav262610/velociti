// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserRegister from './pages/UserRegister'
import CaptainLogin from './pages/CaptainLogin'
import CaptainRegister from './pages/CaptainRegister'
import Error from './pages/Error'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogOut from './pages/UserLogOut'
import CaptainHome from './pages/CaptainHome'
import CaptainLogOut from './pages/CaptainLogOut'
import CaptainWrapperProtector from './pages/CaptainWrapperProtector'
import Riding from './pages/Riding'
import CaptainRiding from './components/CaptainRiding'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/register' element={<UserRegister />} />
        <Route path='/riding' element={<Riding />} />
        <Route path='/captain-riding' element={<CaptainRiding />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-register' element={<CaptainRegister />} />
        <Route path='*' element={<Error />} />
        <Route path='/home' element={
          <UserProtectWrapper>
            <Home />
          </UserProtectWrapper>
        } />
        <Route path='/captain-home' element={
          <CaptainWrapperProtector>
            <CaptainHome />
          </CaptainWrapperProtector>
        } />
        <Route path='/user/logout' element={
          <UserProtectWrapper>
            <UserLogOut />
          </UserProtectWrapper>
        } />
        <Route path='/captain/logout' element={
          <UserProtectWrapper>
            <CaptainLogOut />
          </UserProtectWrapper>
        } />

      </Routes>
    </>
  )
}

export default App