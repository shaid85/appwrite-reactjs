import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth';
import {logout} from '../store/authSlice';

function Logout() {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logout().then(() => {
                dispatch(logout())
        })
    }
  return (
    <>
        <button className=" cursor-pointer text-gray-800 dark:text-white font-medium text-sm px-2 lg:px-3 py-2 lg:py-2.5 mr-2 lg:mr-0 focus:outline-none"
        onClick={logoutHandler} >
            Logout
        </button>
    </>
  )
}

export default Logout