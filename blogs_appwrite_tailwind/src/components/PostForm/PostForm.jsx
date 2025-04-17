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
        },
    })
    const navigate = useNavigate()
    const userData = useSelector((state) => state.user.userData)

    const submit = async (data) => {
        if(post){
          const file= data.image[0] ? configService.uploadFile(data.image[0]) : null
          
          if(file){
            configService.deleteFile(post.feturedImage)
          }

          const dbPost = await configService.updatePost(post.$id, {
            ...data,
            feturedImage: file ? file.$id : undefined,
          })
          if(dbPost){
            navigate('/posts')
          }
        }else{
          const file= data.image[0] ? configService.uploadFile(data.image[0]) : null
          if(file){
            const fileId= file.$id
            data.feturedImage= fileId
            const dbPost= await configService.createPost({
              ...data,
              userId: userData.$id,
            })
            if(dbPost){
              navigate(`/posts/${dbPost.$id}`)
            }
          }
        }
    }

    const slugTransfrom = useCallback((value) => {
      if (value && typeof value === 'string') {
        return value
          .trim()
          .toLowerCase()
          .replace(/^[a-zA-Z\d\s]+/g, '-')
          .replace(/\s/g, '-')
      }else{
        return ''
      }
    },[])

    React.useEffect(() => {
      const subscription = watch((value, {name}) => {
        if(name === 'title'){
          setValue('slug', slugTransfrom(value.title,{shouldValidate:true}))
        }
      })
      return () => subscription.unsubscribe()
    },[watch('title'),slugTransfrom,setValue])

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap gap-4 p-4">
      <div className='w-2/3 px-2'>
        <Input 
          label="Title: "
          placeholder="Post title"
          className="mb-4"
          {...register('title', { required: true })}
        />
        <Input 
          label="Slug: "
          placeholder="Post slug"
          className="mb-4"
          {...register('slug', { required: true })}
          onInput={(e) => {
            setValue('slug', slugTransfrom(e.target.value), { shouldValidate: true })
          }}
        />
        <RTE 
          label="Content: "
          placeholder="Post content"
          control={control}
          name="content"
          className="mb-4"
          rules={{ required: true }}
        />
      </div>
      <div className='w-1/3 px-2'>
        <Input 
          label="Featured Image: "
          type="file"
          className="mb-4"
          accept="image/png, image/jpeg, image/jpg"
          {...register('image', { required: !post })}
        />
        {post && (
          <div className='w-full mb-4'>
            <img src={configService.getFilePreview(post.feturedImage)} alt="Post Featured" className="rounded-lg w-full h-auto mb-4" />
          </div>
        )}
        <Select 
          options={["active","inactive"]}
          label="Status: "
          placeholder="Select status"
          className="mb-4"
          {...register('status', { required: true })}
        />
        <Button type='submit' bgColor={post?"bg-green-500" : undefined} className='w-full'>
          {post ? 'Update Post' : 'Create Post'}
        </Button>
      </div>
    </form>
  )
}

export default PostForm
