import { db } from "./firebaseConfig";
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";

export const addTaskFirebase = async(taskData)=>{
    try {
        const taskRef=doc(collection(db,"tasksTable"));
        const taskId=taskRef.id;

        await setDoc(taskRef,{
            id:taskId,
            ...taskData,
            created_at:serverTimestamp(),
        });

        return  {success: true, id: taskId};
    } catch (error) {
        console.error("Error adding task:", error);
        throw error;
    }
};