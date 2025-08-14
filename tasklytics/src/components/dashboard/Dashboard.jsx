import React, { useState, useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux';
import { getAllTaskFirebase } from '../../firebase/getAllTaskService';
import { getAllMasterFirebase } from '../../firebase/getAllMasterService';
import { FaCheck } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa6";
import { MdLocalFireDepartment } from "react-icons/md";
import { IoMdRocket } from "react-icons/io";
import CountCard from './CountCard';
import {StackedBarChart} from '../index';

function Dashboard() {
    const {user}=useSelector((state)=>state.auth);
    const [allTasks, setAllTasks] = useState([]);
    const [statusMaster, setStatusMaster] = useState([]);
   
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

    // for task Count
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

    // fetxch Master Running Function
    const fetchMasters = async (tableName, setVarName) => {
        const res = await getAllMasterFirebase(false, tableName);
        if (res.success) setVarName(res.data);
    }; 

    useEffect(()=>{
        fetchMasters("statuses", setStatusMaster);
    },[])

    // Bar Chart
    const chartData = useMemo(() => {
        const grouped = {};

        for (let task of allTasks) {
            const client = task.client || "Unknown";

            // If this client isn't in grouped yet, initialize it dynamically from master
            if (!grouped[client]) {
                grouped[client] = { client };

                // Add each status key from master data with initial count = 0
                statusMaster.forEach(status => {
                    grouped[client][status.value] = 0;
                });
            }

            // Increment the correct status key
            if (grouped[client][task.taskStatus] !== undefined) {
                grouped[client][task.taskStatus] += 1;
            }
        }

        return Object.values(grouped);
    }, [allTasks, statusMaster]);

    return (
        <>
        <div className="mx-auto p-4 z-10">
            <h2 className="text-2xl font-bold mb-4 text-center">Dashboard</h2>
            {/* Task Count Section */}
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
            <div className="bg-white p-4 rounded-lg shadow w-1/2">
                <h3 className="text-lg font-semibold mb-4">Tasks by Client</h3>
                <StackedBarChart data={chartData} masterData={statusMaster}/>
            </div>            
        </div>    
        </>
    )
}

export default Dashboard
