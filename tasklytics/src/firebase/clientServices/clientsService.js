import { db } from "../firebaseConfig";
import {
  collection,
  query,
  getDocs,
  orderBy,
} from "firebase/firestore";

export const getClientsWithFilter = async ({ page, pageSize }) => {
  try {
    let q = collection(db, "clients");

    // Order by name
    q = query(q, orderBy("sortOrder"));

    const snapshot = await getDocs(q);
    const clients = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    // console.log(clients);

    // server-side pagination simulation
    const startIndex = (page - 1) * pageSize;
    const paginatedData = clients.slice(startIndex, startIndex + pageSize);
    let totalPages=Math.ceil(clients.length / 10);
    console.log(totalPages);

    return { success: true, data: paginatedData, totalPages:totalPages };
  } catch (error) {
    console.error("Error fetching clients:", error);
    return { data: [], total: 0 };
  }
};
