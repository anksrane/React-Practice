import { db } from "../firebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";

export const getClientsWithFilter = async ({ page, pageSize, search }) => {
  try {
    let q = collection(db, "clients");

    // For search
    if (search) {
      q = query(q, where("keywords", "array-contains", search.toLowerCase()));
    }

    // Order by name
    q = query(q, orderBy("sortOrder"));

    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    console.log(data);

    // server-side pagination simulation
    const startIndex = (page - 1) * pageSize;
    const paginatedData = data.slice(startIndex, startIndex + pageSize);

    return { data: paginatedData, total: data.length };
  } catch (error) {
    console.error("Error fetching clients:", error);
    return { data: [], total: 0 };
  }
};
