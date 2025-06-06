import React, { useEffect, useState } from 'react'
import { Link,useNavigate,useParams } from 'react-router-dom'
import configService from '../appwrite/config'
import { Button, Container } from '../components'
import parse from 'html-react-parser'
import { useSelector } from 'react-redux'

export default function Post() {
    const { slug } = useParams()
    const navigate=useNavigate()
    const [post, setPost] = useState(null)
    const userData=useSelector((state)=>state.auth.userData);

    const isAuther= post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if(slug){
            configService.getPost(slug).then((data) => {
                if (data) {
                    setPost(data)
                } else {
                    navigate("/")
                }
            })
        }
    },[slug,navigate])

    const deletePost=()=>{
        configService.deletePost(post.$id).then((status)=>{
            if(status){
                configService.deleteFile(post.featuredImage);
                navigate("/");
            }
        })
    }

    return post ? (
        <div className='py-8'>
            <Container>
                <div className='w-full flex justify-center mb-4 relative border rounded-xl p-2'> 
                    <img src={configService.getFilePreview(post.featuredImage)} alt={post.title} className='rounded-xl' />

                    {isAuther && (
                        <div className='absolute right-6 top-6'>
                            <Link className={`/edit-post/${post.$id}`}>
                                <Button
                                    bgColor='bg-green-500'
                                    className='mr-3'
                                >
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor='bg-red-500' onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className='w-full mb-6'>
                    <h1 className='text-2xl font-bold'>{post.title}</h1>
                </div>
                <div className='browser-css'>
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null
}
