import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../services/firebase'
import { Link } from 'react-router-dom'

function ViewAllPosts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

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
                        <li key={post.id} className='p-4 border rounded shadow'>
                            <h3 className='font-semibold text-xl'>{post.title}</h3>
                            <p className='text-gray-600 text-sm'>Slug: {post.slug}</p>
                            <p className='text-sm text-gray-400'>
                                Created At:{" "}
                                {post.createdAt?.toDate()?post.createdAt.toDate().toLocaleDateString() : "N/A"}
                                </p>
                            <div className='mt-2 space-x-2'>
                                <Link to={`/viewPost/${post.id}`} className='text-blue-500 hover:underline'>View</Link>
                                <Link to={`/editPost/${post.id}`} className='text-blue-500 hover:underline'>Edit</Link> 

                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    }
}

export default ViewAllPosts
