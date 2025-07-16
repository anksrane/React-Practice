import { db } from './firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const getCodersList = async () => {
    try {
        const q= query(
            collection(db, "users"),
            where("userRole", "==", "Coder")
        );
        const snapshot=await getDocs(q);

        const coders=snapshot.docs.map(doc=>{
            const data= doc.data();
            return {
                label: data.userName,
                value: data.id,
            };
        });

        return coders;
    }catch(error){
        console.error("Error fetching coders:", error);
        return [];
    }
}