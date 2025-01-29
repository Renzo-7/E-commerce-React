import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

export const getProducts = async () => {
  const productsCollection = collection(db, "products");
  const querySnapshot = await getDocs(productsCollection);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getProductsByCategory = async (categoryId) => {
  const productsCollection = collection(db, "products");
  const q = query(productsCollection, where("category", "==", categoryId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
