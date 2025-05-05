import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../services/firebase'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ViewAllPosts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const user = useSelector((state) => state.auth.user)
    console.log("User: ", user);

    useEffect(() => {
        getDocs(collection(db, 'posts'))
            .then((querySnapshot) => {
                const postsLists = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                setPosts(postsLists);
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching posts: ", error)
                setLoading(false)
            })
    },[])

    if (loading) {
        return <div className='max-w-4xl mx-auto mt-10'>
            <h1 className='text-2xl font-bold mt-10'>Loading Posts...</h1>
        </div>
    }else{
        return <div className='max-w-4xl mx-auto mt-10'>
            <h1 className='text-2xl font-bold mt-10'>All Posts</h1>
            {posts.length === 0 ? (
                <p className='mt-4'>No posts available.</p>
            ) : (
                <ul className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                  {console.log("Posts: ", posts)}
                    {posts.map((post) => (
                        <li key={post.id} className='p-4 border rounded shadow flex flex-col justify-between h-auto'>
                            <div className='flex flex-col mb-2'>
                                <h3 className='font-semibold text-xl'>{post.title}</h3>
                                <p className='text-gray-600 text-sm'>Slug: {post.slug}</p>
                            </div>
                            <div className='mt-2'>
                                <p className='text-sm text-gray-400'>
                                    Created At:{" "}
                                    {post.createdAt?.toDate()?post.createdAt.toDate().toLocaleDateString() : "N/A"}
                                </p>
                                <div className='flex gap-1 mt-2'>
                                    <Link to={`/viewPost/${post.id}`} className='inline-block rounded bg-blue-500 text-white px-2 py-1 hover:bg-blue-950'>View</Link>
                                    {
                                        user && user.uid === post.userId ? (
                                            <Link to={`/editPost/${post.id}`} className='inline-block rounded bg-blue-500 text-white px-2 py-1 hover:bg-blue-950'>Edit</Link> 
                                        ) : null

                                    }                                    
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    }
}

export default ViewAllPosts
