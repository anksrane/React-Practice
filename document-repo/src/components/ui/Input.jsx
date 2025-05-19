import React,{useId} from 'react'

const Input = React.forwardRef(function Input({
    label="Please enter Text",
    type="text",
    name="",
    className="",
    placeholder="Please enter Text",
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
            />
        </div>
  )
})

export default Input
