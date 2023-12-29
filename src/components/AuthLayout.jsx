import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children, authentication = true}) {
    const [Loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)
    const navigate = useNavigate()

useEffect(() => {
    if (authentication && authStatus !== true) {
        navigate("/login")
    }else if (!authentication && authStatus === true) {
        navigate("/")
    } 
    setLoader(false)
}, [navigate,authStatus,authentication])
    

  return Loader ? <h1>Loading...</h1> : <>{children}</>
}

