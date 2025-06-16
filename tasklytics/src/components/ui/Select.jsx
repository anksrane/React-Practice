import React, { useId } from 'react';

const Select = React.forwardRef(function Select({
  options = [],
  label = 'Please select an option',
  className = '',
  defaultOption = 'Select an option', 
  error = '', 
  ...props
}, ref) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <select
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border w-full ${error ? 'border-red-500' : 'border-gray-200'} ${className}`} // ✨ changed
        {...props}
      >
        <option value="">{defaultOption}</option> {/* 🆕 added */}
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
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>} {/* 🆕 added */}
    </div>
  );
});

export default Select;