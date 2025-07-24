import { collection, getDocs, query, orderBy, limit, startAfter, where } from "firebase/firestore";
import { db } from "./firebaseConfig";

// Labels for Map
const taskPhases = [
    { value: "planning", "label": "Planning" },
    { value: "designing", "label": "Designing" },
    { value: "implementation", "label": "Implementation" },
    { value: "testing", "label": "Testing" },
    { value: "delivery", "label": "Delivery" },
    { value: "hold", "label": "Hold" }
];

const taskPriorities = [
    { value: "high", "label": "High" },
    { value: "medium", "label": "Medium" },
    { value: "low", "label": "Low" }
];

const statuses = [
    { value: "pending", "label": "Pending" },
    { value: "completed", "label": "Completed" },
    { value: "inProgress", "label": "In Progress" },
    { value: "overdue", "label": "Overdue" }
];


const getLabel=(list,value)=>list.find(item=>item.value===value)?.label || value;

export const getAllTaskFirebase = async (
    searchTerm="",
    filters={},
    sortBy = "created_at",
    sortOrder = "asc",
    pageSize = 10,
    cursor = null,
) => {
    try {
        const colRef= collection (db,'tasksTable');
        const conditions = [];

        // Filters (phase, status, priority)
        if (filters.phase) {
            conditions.push(where("taskPhase", "==", filters.phase));
        }
        if (filters.status) {
            conditions.push(where("taskStatus", "==", filters.status));
        }
        if (filters.priority) {
            conditions.push(where("priority", "==", filters.priority));
        }
        // let q = query(
        //     colRef,
        //     ...conditions,
        //     orderBy(sortBy, sortOrder),
        //     ...(cursor ? [startAfter(cursor)] : []),
        //     limit(pageSize+1)
        // );    

        let baseQuery = query(
            colRef,
            ...conditions,
            orderBy(sortBy, sortOrder)
        );
        
        let finalQuery;
        if (cursor) {
            finalQuery = query(baseQuery, startAfter(cursor), limit(pageSize + 1));
        } else {
            finalQuery = query(baseQuery, limit(pageSize + 1));
        }        

        const querySnapshot = await getDocs(finalQuery);
        const docs = querySnapshot.docs;    // All documents fetched by Firebase (up to pageSize + 1)

        // Determine if there are more documents than the requested pageSize
        const hasMore = docs.length > pageSize;

        // The actual documents to return for the current page 
        const tasksToReturn = docs.slice(0, pageSize);       

        // The next cursor should be the last document snapshot of the *current page's returned data*.
        // This is crucial for the `startAfter` logic on the next fetch.
        let nextCursorToStore = null;
        if (tasksToReturn.length > 0) {
            nextCursorToStore = tasksToReturn[tasksToReturn.length - 1];
        }

        const tasks = tasksToReturn.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                ...data,
                // Apply human-readable labels
                taskPhaseLabel: getLabel(taskPhases, data.taskPhase),
                taskStatusLabel: getLabel(statuses, data.taskStatus),
                priorityLabel: getLabel(taskPriorities, data.priority)
            };
        }); 

        return {
            success: true,
            data: tasks,
            nextCursor: nextCursorToStore, // Cursor for the *next* page's query
            hasMore: hasMore // Boolean indicating if there are more pages beyond this one
        };
    }catch(error){
        console.log("Error fetching tasks:", error);
        return { success: false, error };
    }
}