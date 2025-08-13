import React, { useState, useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux';
import { getAllTaskFirebase } from '../../firebase/getAllTaskService';
import { FaCheck } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa6";
import { MdLocalFireDepartment } from "react-icons/md";
import { IoMdRocket } from "react-icons/io";
import CountCard from './CountCard';
import {StackedBarChart} from '../index';

function Dashboard() {
    const {user}=useSelector((state)=>state.auth);
    const [allTasks, setAllTasks] = useState([]);
    useEffect(()=>{
        const getAllTasks = async () =>{
            try {
                const response = await getAllTaskFirebase(user, false);
                if(response.success){
                    setAllTasks(response.data);
                    console.log(response.data);
                }
            } catch (error) {
                console.error("Error in Task Fetching: ", error);
            }
        }
        getAllTasks();
    },[user])

    const counts = useMemo (()=>{
        let completed = 0, pending = 0, overdue = 0, active = 0;

        for (let task of allTasks) {
            switch (task.taskStatus) {
            case "completed": completed++; break;
            case "pending": pending++; break;
            case "overdue": overdue++; break;
            case "wip": active++; break;
            }
        }

        return { completed, pending, overdue, active };        
    },[allTasks])

    const chartData= useMemo (()=>{
        const grouped = {};
        for (let task of allTasks) {
        const client = task.client || "Unknown";
        if (!grouped[client]) {
            grouped[client] = { client, completed: 0, pending: 0, overdue: 0, wip: 0 };
        }
        grouped[client][task.taskStatus] = (grouped[client][task.taskStatus] || 0) + 1;
        }
        return Object.values(grouped);        
    },[allTasks])

    return (
        <>
        <div className="mx-auto p-4 z-10">
            <h2 className="text-2xl font-bold mb-4 text-center">Dashboard</h2>
            <div className='grid grid-cols-4 gap-4 rounded-lg'>
                <CountCard title="Completed Tasks" 
                    count={counts.completed} 
                    icon={<FaCheck className="text-green-500 text-3xl" />}
                  />
                <CountCard title="Pending Tasks" 
                    count={counts.pending} 
                    icon={<FaStopwatch className="text-yellow-400 text-3xl" />}
                  />
                <CountCard title="Overdue Tasks" 
                    count={counts.overdue} 
                    icon={<MdLocalFireDepartment className="text-red-700 text-3xl" />}
                  />
                <CountCard title="Active Tasks" 
                    count={counts.active} 
                    icon={<IoMdRocket className="text-green-500 text-3xl" />}
                  />
            </div>

            {/* Chart */}
            <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Tasks by Client</h3>
                <StackedBarChart data={chartData} />
            </div>            
        </div>    
        </>
    )
}

export default Dashboard
