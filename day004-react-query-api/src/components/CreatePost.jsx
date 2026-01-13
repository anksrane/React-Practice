import { useCreatePost } from "../hooks/useCreatePost";

function CreatePost() {
  const createPostMutation = useCreatePost();

  const handleSubmit = () => {
    createPostMutation.mutate({
      title: "My Post",
      body: "Hello World",
      userId: 1,
    });
  };

  return (
    <>
      <button onClick={handleSubmit}>Create Post</button>

      {createPostMutation.isLoading && <p>Saving...</p>}
      {createPostMutation.isError && <p>Error occurred</p>}
      {createPostMutation.isSuccess && <p>Post created!</p>}
    </>
  );
}

export default CreatePost;
