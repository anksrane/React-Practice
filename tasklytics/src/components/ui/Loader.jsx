import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Loader({
  color=""
}) {
  return (
    <div className='flex items-center justify-center h-screen'>
      <AiOutlineLoading3Quarters className={`animate-spin text-4xl ${color? '': 'text-white'}`} />
    </div>
  )
}

export default Loader
