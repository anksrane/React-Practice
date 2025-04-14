import {React,useState} from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import { Button, Input } from './index'
import authService from '../appwrite/auth'
import {useFrom} from 'react-hook-form'
import { useState } from 'react'
function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit} = useFrom()
    const [ error , setError ] = useState("")

    const login = async (data) => {
        setError("")
        try {
            const session=await authService.login(data)
            if(session){
                const userData=await authService.getCurrentUser()
                if(userData){
                    dispatch(authLogin(userData))
                    navigate('/')
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div>
      
    </div>
  )
}

export default Login
