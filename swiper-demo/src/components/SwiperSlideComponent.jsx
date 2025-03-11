import React from 'react'

function SwiperSlideComponent({content}) {
  return (
    <div className="flex items-center justify-center h-40 bg-blue-200 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">{content}</h3>
    </div>
  )
}

export default SwiperSlideComponent
