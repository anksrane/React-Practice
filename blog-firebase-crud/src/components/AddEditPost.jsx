import { useParams, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { Editor } from '@tinymce/tinymce-react'
import { useRef, useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { Button,Input } from "./index";
import { db } from "../services/firebase";
import { doc, addDoc, collection, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { storage } from '../services/firebase';
// import { v4 as uuidv4 } from 'uuid'; // for generating unique file names

import { toast } from 'react-toastify';

function AddEditPost() {
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);
    
    const { id } = useParams();
    const editorRef = useRef(null);
    const navigate = useNavigate();
    const [isSlugEdited, setIsSlugEdited] = useState(false);
    const [loading, setLoading] = useState(true);

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const title=watch("title");
    const slug=watch("slug");

    // Slug Auto Generation
    useEffect(() => {
        if(title && !isSlugEdited) {
            const generatedSlug = title.
            toLowerCase().
            replace(/\s+/g, '-').
            replace(/[^a-z0-9-]/g, '');

            setValue("slug", generatedSlug, { shouldValidate: true });
        }
    },[title, isSlugEdited,setValue]);

    // Fetch Post Data for Editing
    useEffect(() => {
        const fetchPost= async ()=>{
            if(!id){
                setLoading(false);
                return;
            }
            try {
                const docRef = doc(db, "posts", id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const postData = docSnap.data();
                    console.log("Post Data: ", postData);
                    reset(postData);
                    setLoading(false);
                }else {
                    console.log("No such document!");
                    // alert("Post not found. Please try again.");
                    toast.error("Post not found. Please try again.")
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error fetching post: ", error);
                // alert("Something went wrong. Please try again.");
                toast.error("Something went wrong. Please try again.")
                setLoading(false);
            }
        };

        fetchPost();
    },[id, reset]);

    // From Submit Logic
    const onPostSubmit = async (data) => {
        console.log("Form Submitted: ", data);
        try {

            // Upload image to Firebase Storage
            // const file = data.image[0]; 
            // if (!file) {
            //     alert("Please upload an image.");
            //     return;
            // }

            // const imageRef=ref(storage, `postImages/${uuidv4()}-${file.name}`); 

            // const snapshot = await uploadBytes(imageRef, file);

            // const imageUrl = await getDownloadURL(snapshot.ref);
            // console.log("Image URL: ", imageUrl);

            const postData = {
                title: data.title,
                slug: data.slug,
                // imageUrl,
                content: data.content,

            };

            if (id) {
                // Update existing post
                postData.updatedAt = serverTimestamp();
                const docRef = doc(db, "posts", id);
                await updateDoc(docRef, postData);
                toast.success("Post updated successfully!")
            } else {
                postData.createdAt = serverTimestamp();
                postData.userId = user.uid;
                postData.userName = user.displayName;
                await addDoc(collection(db, "posts"), postData);
                toast.success("Post added successfully!")
            }
            navigate("/");
        } catch (error) {
            console.error("Error adding post: ", error);
            alert("Something went wrong. Please try again.");
            toast.error("Something went wrong. Please try again.")
        }
    }

    if (loading) {
        return (
            <div className="max-w-3xl mx-auto mt-10 p-6 border rounded shadow">
                <div className="text-center mt-10">Loading...</div>
            </div>)
    }else{
        return (
            <div className="max-w-3xl mx-auto mt-10 p-6 border rounded shadow">
                <h2 className='text-2xl font-bold mb-6'>
                    {id ? 'Edit Post' : 'Add New Post'}
                </h2>

                <form onSubmit={handleSubmit(onPostSubmit)} className='space-y-4'>

                    {/* Post Title */}
                    <div className='w-full'>
                        <Input label='Post Title: ' className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter post title"
                            {...register("title", {
                                required: "Title is required",
                            })}></Input>
                        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
                    </div>

                    {/* Post Slug */}
                    <div className='w-full'>
                        <Input label='Post Slug:' className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        placeholder="Enter post slug"
                            {...register("slug", {
                                required: "Slug is required",
                                onChange: () => {
                                    setIsSlugEdited(true);
                                }
                            })}></Input>
                        {errors.slug && <p className="text-red-500">{errors.slug.message}</p>}
                    </div>

                    {/* Image Upload */}
                    <div className='w-full'>
                        <Input label='Image:' type="file" accept="image/*" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Please upload an image"
                            {...register("image", {
                                // required: "Image is required",
                            })}></Input>
                        {errors.image && <p className="text-red-500">{errors.image.message}</p>}
                    </div>

                    {/* RTE Editor */}
                    <div className='w-full'>
                        <label className='inline-block mb-1 pl-1'>Post Content: </label>
                        <Editor
                            onInit={(evt, editor) => (editorRef.current = editor)}
                            init={{
                                height: 300,
                                menubar: false,
                                required: true,
                                plugins: [
                                "advlist", "autolink", "lists", "link", "image", "charmap", "preview",
                                "anchor", "searchreplace", "visualblocks", "code", "fullscreen",
                                "insertdatetime", "media", "table", "code", "help", "wordcount"
                                ],
                                toolbar:
                                "undo redo | formatselect | bold italic backcolor | \
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help",
                                branding: false,
                                content_style:
                                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                            }}
                            value={watch("content")}
                            onEditorChange={(content) => {
                                setValue("content", content, { shouldValidate: true }); // from react-hook-form
                            }}
                            apiKey="3l8xvhhxim2e4zv3n5fgnnyhzkio8xucvq94cf2k0hbuhxc7" // ← replace with your key or 'no-api-key'
                            />
                        {errors.content && <p className="text-red-500">{errors.content.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className='w-full'>
                        <Button type="submit" disabled={isSubmitting}  className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400">
                            {isSubmitting ? 'Saving...' : (id ? 'Update Post' : 'Create Post')}
                        </Button>
                    </div>

                </form>
            </div>
        )
    }
}

export default AddEditPost
