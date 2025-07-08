import React, { useId } from 'react';

const Select = React.forwardRef(function Select({
  options = [],
  label = 'Please select an option',
  className = '',
  defaultOption = 'Select an option', 
  error = '', 
  labelVisible=true,
  ...props
}, ref) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label className={`${labelVisible ? 'inline-block':'hidden'} mb-1 pl-1`} htmlFor={id}>
          {label}
        </label>
      )}
      <select
        id={id}
        ref={ref}
        className={`px-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border w-full ${error ? 'border-red-500' : 'border-gray-200'} ${className}`}
        {...props}
      >
        <option value="" className='text-gray-400'>{defaultOption}</option>
        {options?.map((option) =>
          typeof option === 'object' ? (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ) : (
            <option key={option} value={option}>
              {option}
            </option>
          )
        )}
      </select>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
});

export default Select;