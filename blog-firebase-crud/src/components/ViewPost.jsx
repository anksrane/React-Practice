import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { db } from '../services/firebase'
import { doc, getDoc, deleteDoc } from 'firebase/firestore'

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
            alert("Post deleted successfully!");
            navigate("/");
        } catch (error) {
            console.error("Error deleting post: ", error);
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
            <div className="max-w-4xl mx-auto mt-10 p-4">
                <h1 className="text-3xl font-bold">{post.title}</h1>
                <img src={post.imageUrl} alt={post.title} className="w-full h-auto my-4" />
                <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }}></div>
        
                {
                    user && user.uid === post.userId ? (
                        <div className="mt-4">
                        <button
                            onClick={() => navigate(`/editPost/${id}`)}
                            className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
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
