import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebaseConfig";

const getLabel=(list,value)=>list.find(item=>item.value===value)?.label || value;

export const getAllTaskFirebase = async (user, trashStatus) => {
    try {
        const tasksRef = collection(db, "tasksTable");
        const conditions = [];

        if (!trashStatus) {
            conditions.push(where("trash", "==", false));
        }    
        
        // Role-based filters
        if (user.userRole === "Manager") {
            conditions.push(where("managerId", "array-contains", user.id));
        }else if (user.userRole === "Coder") {
            conditions.push(where("coderIds", "array-contains", user.id));
        }        

        const q = conditions.length > 0 ? query(tasksRef, ...conditions) : tasksRef;      

        const querySnapshot = await getDocs(q);

        const allTasks=querySnapshot.docs.map(doc=>({
            id:doc.id,
            ...doc.data()
        }))        

        return {success:true, data:allTasks};
    }catch(error){
        console.log("Error fetching tasks:", error);
        return { success: false, error };
    }
}