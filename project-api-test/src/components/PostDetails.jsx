// src/components/PostDetails.jsx

import useFetch from "../hooks/useFetch";
import { fetchPostsById } from "../api/apiClient";
import Loader from "./Loader";

const PostDetails = ({ postId }) => {
  const { data, loading, error } = useFetch(fetchPostsById, postId);
    if(!postId) return <p>Select a Post</p>;
    if(loading) return <Loader />;
    if(error) return <p>{error}</p>;

    if(postId)
    return (
        <div>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
        </div>
    );
};

export default PostDetails;
