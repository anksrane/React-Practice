import React, { useState, useEffect } from 'react'
import { getAllTaskFirebase } from '../../firebase/getAllTaskService';

function Dashboard() {
    const [allTasks, setAllTasks] = useState([]);
    const [taskCount, setTaskCount] = useState([]);
    useEffect(()=>{
        const getAllTasks = async () =>{
            try {
                const response = await getAllTaskFirebase(false);
                if(response.success){
                    setAllTasks(response.data);
                    console.log(response.data);
                }
            } catch (error) {
                console.error("Error in Task Fetching: ", error);
            }
        }
        getAllTasks();
    },[])

    useEffect (() => {
        
    },[allTasks])
    return (
        <>
        <div className="mx-auto p-4 z-10">
            <h2 className="text-2xl font-bold mb-4 text-center">Dashboard</h2>
            <p>{allTasks.length}</p>
            <div className=''>
                <div></div>
            </div>
        </div>    
        </>
    )
}

export default Dashboard
