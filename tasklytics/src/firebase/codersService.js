import { db } from './firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const getCodersList = async (managerId) => {
    try {
        const q= query(
            collection(db, "users"),
            where("userRole", "==", "Coder")
        );
        const snapshot=await getDocs(q);

        // const coders=snapshot.docs.map(doc=>{
        //     const data= doc.data();
        //     console.log(data.manager);
            
        //     // return {
        //     //     label: data.userName,
        //     //     value: doc.id,
        //     // };
        //     return data;
        // });

        const coders = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(coder => coder.manager?.includes(managerId))
        .map(coder => ({
            label: coder.userName,
            value: coder.id
        }));      
        
        return coders;
    }catch(error){
        console.error("Error fetching coders:", error);
        return [];
    }
}