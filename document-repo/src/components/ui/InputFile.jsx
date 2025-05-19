import React,{useId} from 'react'

const InputFile = React.forwardRef(function Input({
    label="Please enter Text",
    type="file",
    name="",
    className="",
    placeholder="Please enter Text",
    accept="",
    multiple=false,
    ...props
},ref){
    const id=useId()
    return (
        <div className='w-full h-fit'>
            {label && <label 
                className='inline-block mb-1 pl-1'
                htmlFor={id}>
                {label}
            </label>}
            <input 
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            name={name}
            ref={ref}
            {...props}
            id={id}
            placeholder={placeholder}
            accept={accept}
            multiple={multiple}
            />
        </div>
  )
})

export default InputFile
