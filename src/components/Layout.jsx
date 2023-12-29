import React from 'react'
import {Header,Footer} from './index'
import { Outlet } from 'react-router-dom'
import { useState , useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authService from '../appwrite/auth'
import {login,logout} from '../store/authSlice';

function Layout() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
      authService.getCurrentUser()
        .then((userData) => {
          if(userData){
              dispatch(login({userData}))
          }else{
            dispatch(logout())
          }
      })
      .finally(() => setLoading(false))

    
  }, [])
  
  return !loading ? (
    <>
        <Header/>
          <div className='w-full py-8 bg-white dark:bg-gray-800 dark:text-white min-h-screen'>
              <Outlet/>
          </div>
        <Footer/>
    </>
  ) : null
}

export default Layout