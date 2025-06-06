import React, { useState,useEffect } from 'react'
import configService from '../appwrite/config'
import { Container, PostCard } from '../components'

function AllPosts() {
    const [posts,setPosts]=useState([])
    useEffect(()=>{},[])
    // get all posts where status active
    configService.listPosts([]).then((res)=>{
        if(res){
            setPosts(res.documents)
        }
    })
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex- flex-wrap'>
                    {posts.map((post)=>(
                        <div className='p-2 w-1/4' key={post.$id}>
                            <PostCard post={post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts
