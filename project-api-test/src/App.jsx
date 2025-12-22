// App.jsx

import Posts from "./components/Posts";
import PostDetails from "./components/PostDetails";
import { useState } from "react";

function App() {
  const [selectedPost, setSelectedPost]= useState(null);

  return (
    <>
      <Posts />
      <PostDetails postId={selectedPost} />
    </>
  )
}

export default App
