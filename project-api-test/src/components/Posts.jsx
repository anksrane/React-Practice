// src/components/Posts.jsx

import useFetch from "../hooks/useFetch";
import { fetchPosts } from "../api/apiClient";
import Loader from "./Loader";

function Posts({onSelect}) {
    const { data, loading, error } = useFetch(fetchPosts);
    if(loading) return <Loader />
    if(error) return <p>{error}</p>

    console.log(data);
    return (
        <div>
            <ul>
                {data.slice(0, 10).map((post) => (
                    <li key={post.id} onClick={() => onSelect(post.id)}>
                    {post.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Posts
