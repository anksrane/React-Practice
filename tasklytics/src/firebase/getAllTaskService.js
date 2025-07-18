import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const getAllTaskFirebase = async () => {
    try {
        const q = collection(db, "tasksTable");
        const querySnapshot = await getDocs(q);

        const allTasks=querySnapshot.docs.map(doc=>({
            id:doc.id,
            ...doc.data()
        }))
        console.log(allTasks);
        

        return {success:true, data:allTasks};
    }catch(error){
        console.log("Error fetching tasks:", error);
        return { success: false, error };
    }
}