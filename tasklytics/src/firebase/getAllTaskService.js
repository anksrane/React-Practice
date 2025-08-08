import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const getAllTaskFirebase = async (trashStatus) => {
    try {
        const tasksRef = collection(db, "tasksTable");
        const q = trashStatus
            ? tasksRef
            : query(tasksRef, where("trash", "==", false));        

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