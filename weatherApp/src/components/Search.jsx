import React, { useState } from 'react'

function Search({ onSearch }) {
  const [city,setCity] =useState("");
  const submitSearch = (e) =>{
    e.preventDefault();
    if(!city.trim()) return;
    onSearch(city);
  }

  return (
    <div className="flex items-center gap-[5px] search-container-outer">
    {/* <button className='text-white border-[1px] px-[15px] py-[10px] rounded-md hover:bg-slate-50 hover:text-slate-900'><i className="ri-focus-3-line"></i></button> */}
      <form className='w-full grid gap-[5px] search-container' action="#" onSubmit={submitSearch}>
        <input type="search" placeholder="Search for City Name" className='px-[10px] py-[10px] bg-transparent focus-visible:outline-none border-[1px] rounded-md text-white search-ip' value={city} onChange={(e)=>setCity(e.target.value)}  />
        <button type='submit' className='text-white px-[15px] py-[10px] border-[1px] rounded-md hover:bg-slate-50 hover:text-slate-900'><i className="ri-search-line"></i>
        </button>
      </form>
    </div>
  )
}

export default Search
