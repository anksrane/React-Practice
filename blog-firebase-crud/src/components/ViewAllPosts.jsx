import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ViewAllPosts() {
    const [posts,setPosts]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const fetchPosts=async()=>{
            // Firebase Fetch
            const fetchedPosts=[
                {
                    id:1,
                    title:"Post 1",
                    content:"Content of Post 1",
                    image:"https://placehold.co/600x400",
                    slug:"post-1",
                    createdAt:"2023-10-01"
                },
                {
                    id:2,
                    title:"Post 2",
                    content:"Content of Post 2",
                    image:"https://placehold.co/600x400",
                    slug:"post-2",
                    createdAt:"2023-10-02"
                },
                {
                    id:3,
                    title:"Post 3",
                    content:"Content of Post 3",
                    image:"https://placehold.co/600x400",
                    slug:"post-3",
                    createdAt:"2023-10-03"
                }
            ];
            setPosts(fetchedPosts);
            setLoading(false);
        }
        fetchPosts();
    },[])

    if(loading){
        return <div className="flex justify-center items-center h-screen">Loading...</div>
    }else if(posts.length===0){
        return <div className="flex justify-center items-center h-screen">No Posts Available</div>
    }else{
        return (
            <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div key={post.id} className="border rounded shadow overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{post.title}</h3>
                  <p className="text-sm text-gray-500">{post.slug}</p>
                  <div className="flex space-x-4 mt-4">
                    <Link to={`/post/${post.id}`} className="text-blue-500">View</Link>
                    <Link to={`/edit/${post.id}`} className="text-blue-500">Edit</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
    }
}

export default ViewAllPosts
