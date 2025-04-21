import React,{ useEffect,useState } from 'react'
import configService, { ConfigService } from '../appwrite/config'
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        configService.listPosts().then((res) => {
            if(res) {
                setPosts(res.documents)
            }
        })
    },[])

    if(posts.length === 0) {
        return (
            <div className='w-full py-8'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-2xl font-bold'>Login to Read Post</h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }else {
        return (
            <div className='w-full py-8'>
                <Container>
                    <div className='flex flex-wrap'>
                        {posts.map((post) => (
                            <div className='p-2 w-1/4' key={post.$id}>
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        )
    }
}

export default Home
