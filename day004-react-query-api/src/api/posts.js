//api/posts.js

export const createPost = async (newPost) =>{
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        }
    );

    if(!res.ok){
        throw new Error("Failed to Create Posts");
    }

    return res.json();
}