import React, { useId } from 'react'

const DatePicker= React.forwardRef (function DatePicker({
    label='Select Date',
    name='',
    className='',
    labelVisible= true,
    ...props
},ref){
    const id = useId()
    return (
        <div className='w-full h-fit'>
            {label && <label htmlFor={id} className={`${labelVisible ? 'inline-block':'hidden'} inline-block mb-1 pl-1`}>{label}</label>}
            <input
                type='date'
                id={id}
                name={name}
                ref={ref}
                className={`px-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                {...props}
            />
        </div>
    )
});

export default DatePicker
