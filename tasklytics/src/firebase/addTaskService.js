import { db } from "./firebaseConfig";
import { collection, doc, serverTimestamp, setDoc,runTransaction } from "firebase/firestore";

export const addTaskFirebase = async(taskData)=>{
    try {
        const taskRef=doc(collection(db,"tasksTable"));
        const taskId=taskRef.id;

        // Transaction for serial number
        const serialNo = await runTransaction(db, async (transaction) => {
            const counterRef = doc(db, "counters", "taskCounter");
            const counterDoc = await transaction.get(counterRef);

            let newNumber = 1;
            if (counterDoc.exists()) {
                newNumber = counterDoc.data().lastNumber + 1;
            }

            transaction.set(counterRef, { lastNumber: newNumber }, { merge: true });

            return "T" + newNumber.toString().padStart(8, "0");
        });

        await setDoc(taskRef,{
            id:taskId,
            serialNo,
            ...taskData,
            keywords: [...(taskData.keywords || []), serialNo],
            created_at:serverTimestamp(),
        });

        return  {success: true, id: taskId, serialNo };
    } catch (error) {
        console.error("Error adding task:", error);
        throw error;
    }
};