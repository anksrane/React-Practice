import React, { useState, useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux';
import { getAllTaskFirebase } from '../../firebase/getAllTaskService';
import { getAllMasterFirebase } from '../../firebase/getAllMasterService';
import { FaCheck } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa6";
import { MdLocalFireDepartment } from "react-icons/md";
import { IoMdRocket } from "react-icons/io";
import CountCard from './CountCard';
import {StackedBarChart, Select} from '../index';

function Dashboard() {
    const {user}=useSelector((state)=>state.auth);
    const [allTasks, setAllTasks] = useState([]);
    const [masterData, setMasterData] = useState([]);
    const [filterType, setFilterType] = useState("status");
   
    // Get All TAsk Which are Trash False
    useEffect(()=>{
        const getAllTasks = async () =>{
            try {
                const response = await getAllTaskFirebase(user, false);
                if(response.success){
                    setAllTasks(response.data);
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
        const res = await getAllMasterFirebase(tableName);
        if (res.success) setVarName(res.data);
    }; 

    // Get Master List by status/ priority/ phase
    useEffect(() => {
        const tableMap = {
            status: "statuses",
            phase: "phases",
            priority: "priorities"
        };
        fetchMasters(tableMap[filterType], setMasterData);
    }, [filterType]);

    // Bar Chart
    const chartData = useMemo(() => {
        if (!masterData.length) return [];
        const grouped = {};

        for (let task of allTasks) {
            const client = task.clientLabel || "Unknown";
            const key =
                    filterType == "phase" ? task.taskPhase :
                    filterType == "priority" ? task.priority :
                    task.taskStatus;            

            // If this client isn't in grouped yet, initialize it dynamically from master
            if (!grouped[client]) {
                grouped[client] = { client };

                // Add each status key from master data with initial count = 0
                masterData.forEach(item => {
                    grouped[client][item.value] = 0;
                });
            }

            // Increment the correct status key
            if (grouped[client][key] !== undefined) {
                grouped[client][key] += 1;
            }
        }
        
        return Object.values(grouped);
    }, [allTasks, masterData, filterType]);

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
            <div className="bg-white p-4 rounded-lg shadow w-full">
                <div className="flex gap-2 align-center justify-between">
                    <h3 className="text-lg font-semibold mb-4">Task {filterType.toUpperCase()} by Client</h3>
                    <Select 
                        labelVisible={false}
                        // defaultValue="status"
                        value={filterType} 
                        onChange={(e)=> setFilterType(e.target.value)}
                        className="w-48 p-1"
                        options={[
                            { value: "", label: "Filter Tasks", disabled: true },
                            { value: "status", label: "By Status" },
                            { value: "phase", label: "By Phase" },
                            { value: "priority", label: "By Priority" },
                        ]}                        
                    />
                </div>
                <StackedBarChart data={chartData} masterData={masterData}/>
            </div>            
        </div>    
        </>
    )
}

export default Dashboard
