import React from 'react'

function Button({
  children,
  type = 'button',
  variant = 'primary', 
  isLoading = false,   
  className = '',
  ...props
}) {
  const base = 'px-4 py-2 rounded-lg mt-2 transition duration-200';
  const variants = {
    primary: 'bg-black text-white hover:bg-gray-900',
    outline: 'border border-black text-black hover:bg-gray-100',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  }; // ✨ changed

  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${className}`} // ✨ changed
      disabled={isLoading}
      {...props}
    >
      {isLoading ? 'Loading...' : children} {/* ✨ changed */}
    </button>
  );
}

export default Button;