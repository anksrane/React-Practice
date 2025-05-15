import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { db } from '../services/firebase'
import { doc, getDoc, deleteDoc } from 'firebase/firestore'
import { toast } from 'react-toastify';

function ViewPost() {
    const { id } = useParams();
    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const user = useSelector((state) => state.auth.user)

    useEffect(() => {
        const fetchPost=async()=>{
            const postRef = doc(db, "posts", id)
            const postSnap = await getDoc(postRef)

            if(postSnap.exists()){
                setPost(postSnap.data());
                setLoading(false);
            }else{
                console.log("No such document!");
                setLoading(false);
            }
        }
        fetchPost()
    },[id]);

    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this post?");
        if(!confirmDelete) return;

        try {
            await deleteDoc(doc(db, "posts", id));
            toast.success("Post deleted successfully!")
            navigate("/");
        } catch (error) {
            toast.error("Error deleting post: ", error)
            // console.error("Error deleting post: ", error);
        }
    }

    if(loading){
        return (
            <div className="max-w-4xl mx-auto mt-10 p-4 text-center">
                <h1>Loading...</h1>
            </div>
        )
    }else if(!post.title){
        return (
            <div className="max-w-4xl mx-auto mt-10 p-4 text-center">
                <h1>No Post Found</h1>
            </div>
        )
    }else if(post.title){
        return (
            <div className="max-w-4xl mx-auto mt-10 p-4 border rounded shadow">
                <h1 className="text-3xl font-bold">{post.title}</h1>
                    <div className=''>
                        {post.imageUrl ? (
                            <img
                                src={post.imageUrl}
                                alt={post.title}
                                className="w-auto h-auto my-4 rounded"
                            />
                            ) : (
                                ""
                            // <img
                            //     src="https://placehold.co/600x400?text=No%20Image%20to%20show"
                            //     alt="No Image Available"
                            //     className="w-full h-64 object-cover my-4 rounded bg-gray-100"
                            // />
                        )}
                        <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                    </div>
                {
                    user && user.uid === post.userId ? (
                        <div className="mt-4 flex gap-2 justify-between">
                            <div className='flex gap-2'>
                                <button
                                    onClick={() => navigate(`/editPost/${id}`)}
                                    className="bg-blue-500 text-white py-2 px-4 rounded"
                                >
                                    Edit Post
                                </button>
                                <button
                                    onClick={handleDelete}
                                    className="bg-red-500 text-white py-2 px-4 rounded"
                                >
                                    Delete Post
                                </button>
                            </div>
                            <div>
                                <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded block">Back to All Posts</Link>
                            </div>
                        </div>
                    ) : (
                        <div className="mt-4">
                            <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded">Back to All Posts</Link>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default ViewPost
