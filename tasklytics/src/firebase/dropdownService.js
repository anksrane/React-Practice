import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const getDropdownOptions=async (collectionName,columnForSort,order)=>{
    // const q=query(collection(db,collectionName), orderBy('sortOrder','asc'));
    const q=query(collection(db,collectionName), orderBy(columnForSort,order));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => {
        const data=doc.data();
        return {
            value: data.value,
            label: data.label
        }
    })
};