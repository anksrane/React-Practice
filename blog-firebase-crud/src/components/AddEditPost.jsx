import { useParams } from 'react-router-dom'
import { Button,Input } from "./index";
import { useForm } from 'react-hook-form';
import { Editor } from '@tinymce/tinymce-react'
import { useRef } from "react";

function AddEditPost() {
    const { id } = useParams();
    const editorRef = useRef(null);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm();

    const onPostSubmit = async (data) => {
        console.log("Form Submitted: ", data);
    }

    return (
        <div className="max-w-3xl mx-auto mt-10 p-6 border rounded shadow">
            <h2 className='text-2xl font-bold mb-6'>
                {id ? 'Edit Post' : 'Add New Post'}
            </h2>

            <form onSubmit={handleSubmit(onPostSubmit)} className='space-y-4'>

                {/* Post Title */}
                <div className='w-full'>
                    <Input label='Post Title: ' placeholder="Enter post title"
                        {...register("title", {
                            required: "Title is required",
                    })}></Input>
                    {errors.title && <p className="text-red-500">{errors.title.message}</p>}
                </div>

                {/* Post Slug */}
                <div className='w-full'>
                    <Input label='Post Slug: ' placeholder="Enter post slug"
                        {...register("slug", {
                            required: "Slug is required",
                            pattern: {
                                value: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
                                message: "Invalid slug format",
                            },
                        })}></Input>
                    {errors.slug && <p className="text-red-500">{errors.slug.message}</p>}
                </div>

                {/* Image Upload */}
                <div className='w-full'>
                    <Input label='Image URL: ' placeholder="Enter image URL"
                        {...register("image", {
                            required: "Image URL is required",
                            pattern: {
                                value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))$/i,
                                message: "Invalid image URL",
                            },
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
                        onEditorChange={(content) => {
                            setValue("content", content, { shouldValidate: true }); // from react-hook-form
                        }}
                        apiKey="3l8xvhhxim2e4zv3n5fgnnyhzkio8xucvq94cf2k0hbuhxc7" // ← replace with your key or 'no-api-key'
                        />
                    {errors.content && <p className="text-red-500">{errors.content.message}</p>}
                </div>

                {/* Submit Button */}
                <div className='w-full'>
                    <Button type="submit" disabled={isSubmitting} 
                     className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        {isSubmitting ? 'Saving...' : (id ? 'Update Post' : 'Create Post')}
                    </Button>
                </div>

            </form>
        </div>
    )
}

export default AddEditPost
