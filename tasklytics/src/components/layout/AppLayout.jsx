import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import { toggleSidebar } from '../../features/ui/uiSlice';

function AppLayout() {
    const dispatch=useDispatch()
    const isSidebarOpen=useSelector((state)=>state.ui.isSidebarOpen);
    const handleToggleSidebar=()=>{
        dispatch(toggleSidebar)
    }
    return (
        <div className='flex h-screen w-screen overflow-hidden'>
            <Sidebar isOpen={isSidebarOpen}/>
            <div className='flex flex-col flex-1 overflow-hidden'>
                <Header toggleSidebar={handleToggleSidebar}/>
                <main className=' flex-1 overflow-y-auto p-6'>
                    <div className='bg-white min-h-full h-fit w-full'>  {/* I want this div to take full repsonsive height */}
                        <Outlet/>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default AppLayout
