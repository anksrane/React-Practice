import React, { useId } from 'react';

const Input = React.forwardRef(function Input({
  label = 'Please enter Text',
  type = 'text',
  name = '',
  className = '',
  placeholder = 'Please enter Text',
  error = '',        
  isTextarea = false, 
  ...props
}, ref) {
  const id = useId();
  const inputClass = `px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 focus:border-slate-400 duration-200 border w-full ${error ? 'border-red-500' : 'border-gray-200'} ${className}`;

  return (
    <div className="w-full h-fit">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      {isTextarea ? (
        <textarea
          className={inputClass}
          name={name}
          id={id}
          ref={ref}
          placeholder={placeholder}
          {...props}
        />
      ) : (
        <input
          type={type}
          className={inputClass}
          name={name}
          ref={ref}
          id={id}
          placeholder={placeholder}
          {...props}
        />
      )} {/* ✨ changed */}
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>} {/* 🆕 added */}
    </div>
  );
});

export default Input;