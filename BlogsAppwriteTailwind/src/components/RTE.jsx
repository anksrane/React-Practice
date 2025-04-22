import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

export default function RTE({name, control, label, defaultValue=""}) {
  return (
    <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
        <Controller
        name={name || "content"}
        control={control}
        render={({field: {onChange}})=>(
            <Editor 
            initialValue={defaultValue}
            init={{
                height: 300,
                menubar: true,
                readonly: false,
                plugins: [
                    "image", "advlist", "autolink", "lists", "link", "charmap", "anchor", "charmap", "searchreplace", "wordcount", "visualblocks", "code", "fullscreen", "insertdatetime", "media", "table", "helpoption", "template"
                ],
                toolbar: "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | formatselect | underline | removeformat ",
                content_style:"body {}"
            }}
            onEditorChange={onChange}
            />
        )}
        />
    </div>
  )
}

