// src/api/apiClient.js

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchPosts = async () => {
    const res = await fetch(`${BASE_URL}/posts/`);
    if(!res.ok) throw new Error("Failed to fetch posts");
    return res.json();
}

export const fetchPostsById = async (id) => {
    const res = await fetch(`${BASE_URL}/posts/${id}`);
    if(!res.ok) throw new Error("Failed to fetch post");
    return res.json();
}