import React, { useCallback} from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button,Input, Select, RTE } from '../index'
import configService from '../../appwrite/config'

function PostForm({post}) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post ? post.title : '',
            slug: post ? post.slug : '',
            content: post ? post.content : '',
            status: post ? post.status : 'active',
        }
    })
    const navigate = useNavigate()
    const userData = useSelector((state) => state.user.userData)


  return (
    <div>
      
    </div>
  )
}

export default PostForm
