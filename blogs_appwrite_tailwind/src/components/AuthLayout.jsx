import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// File Name and Function Name Can be different
export default function AuthLayout({children,authentication=true}) {
    const navigate=useNavigate()
    const[loader,setLoader]=useState(true)
    const authStatus=useSelector(state=> state.auth.status)

    useEffect(()=>{
      // Redirect logic:
      // If authentican is true (protected route) and the user is not authenticated, redirect to /login.
      // If authentican is false (e.g., login page) and user is already authenticated, redirect to the home page.
      if(authentication && authStatus!==authentication){
        navigate("/login")
      }else if(!authentication && authStatus===authentication){
        navigate("/")
      }
      setLoader(false)
    },[authStatus,navigate,authentication])

    return loader ? (
      <div>Loading...</div>
    ) : (
      <>{children}</>
    )
}
