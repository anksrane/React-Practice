import React, { useState, useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux';
import { getAllTaskFirebase } from '../../firebase/getAllTaskService';
import { getAllMasterFirebase } from '../../firebase/getAllMasterService';
import { startOfWeek, endOfWeek } from "date-fns";
import { FaCheck } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa6";
import { MdLocalFireDepartment } from "react-icons/md";
import { IoMdRocket } from "react-icons/io";
import CountCard from './CountCard';
import {StackedBarChart, Select, ChartSkeleton, TasksDueThisWeek, TasksDueThisWeekSkeleton } from '../index';

function Dashboard() {
    const {user}=useSelector((state)=>state.auth);
    const [allTasks, setAllTasks] = useState([]);
    const [masterData, setMasterData] = useState([]);
    const [filterType, setFilterType] = useState("status");
    const [barChartLoading, setBarChartLoading] = useState(true);
    const [taskDueLoading, setTaskDueLoading] = useState(true);
   
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

    // fetch Master Running Function
    const fetchMasters = async (tableName, setVarName) => {
        const res = await getAllMasterFirebase(tableName);
        if (res.success) setVarName(res.data);
        setBarChartLoading(false);
    }; 

    // Get Master List by status/ priority/ phase
    useEffect(() => {
        const tableMap = {
            status: "statuses",
            phase: "phases",
            priority: "priorities"
        };
        setBarChartLoading(true);
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

    // Show Lable in Chart Title
    const chartTitle = useMemo(() => {
        if (!masterData.length) return "No Data";
        let title = filterType.charAt(0).toUpperCase()+filterType.slice(1,filterType.length);
        return `Tasks by ${title} (per Client)`;
        // Task {chartTitle} by Client
    }, [masterData, filterType]);

    // Task End Date This Week
    const tasksDueThisWeek = useMemo(() => {
        if (!allTasks.length) return [];

        const now = new Date();

        const weekStart = startOfWeek(now, { weekStartsOn: 1 }); // Monday start
        const weekEnd = endOfWeek(now, { weekStartsOn: 1 });     // Sunday end   

        let filteredTasks=allTasks.filter(task => {
            if(task.taskStatus=="completed") return false;
            if (!task.endDate?.seconds) return false;
            const endDate = new Date(task.endDate.seconds * 1000);
            return endDate >= weekStart && endDate <= weekEnd;
        });
        console.log("filteredTasks",filteredTasks);
        return filteredTasks;
    }, [allTasks]);

    useEffect(() => {
        setTaskDueLoading(true);
        if (allTasks.length) {
            setTaskDueLoading(false);
        }
    }, [allTasks]);    

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

            <div className='my-4 rounded-lg flex gap-4'>
                {/* BarChart Dropdown */}
                <div className="bg-white border border-dotted border-brand-primary-light p-4 rounded-lg w-1/2">
                    <div className="flex gap-2 align-center justify-between">
                        <h3 className="text-lg font-semibold mb-4">{chartTitle}</h3>
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
                    {/* <StackedBarChart data={chartData} masterData={masterData}/> */}
                    {barChartLoading ? (
                        <ChartSkeleton rows={chartData?.length || 5} />
                        ) : (
                        <StackedBarChart data={chartData} masterData={masterData} />
                    )}                
                </div>    

                
                {/* Task Due By This Week */}
                <div className="bg-white border border-dotted border-brand-primary-light p-4 rounded-lg w-1/2">
                    {taskDueLoading 
                        ? <TasksDueThisWeekSkeleton rows={4} columns={3} /> 
                        : <TasksDueThisWeek title="Tasks Due This Week" tasks={tasksDueThisWeek} />
                    }
                </div>
            </div>

        </div>    
        </>
    )
}

export default Dashboard
