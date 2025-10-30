import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  query,
  where,
  getDocs,
  getDoc,
  addDoc,
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FS_API_KEY,
  authDomain: "react-gme-88075.firebaseapp.com",
  projectId: import.meta.env.VITE_FS_PROJECT_ID,
  storageBucket: "react-gme-88075.firebasestorage.app",
  messagingSenderId: "376295020011",
  appId: import.meta.env.VITE_FS_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getProducts() {
  const productsRef = collection(db, "products");
  const productsSnapshot = await getDocs(productsRef);
  const documents = productsSnapshot.docs;
  const dataDocs = documents.map((item) => {
    return { id: item.id, ...item.data() };
  });

  return dataDocs;
}
export async function getProductbyId(idParam) {
  const docRef = doc(db, "products", idParam);
  const docSnapshot = await getDoc(docRef);
  const docData = docSnapshot.data();
  docData.id = docSnapshot.id;

  return docData;
}

export async function getProductsbyCateg(categParam) {
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("category", "==", categParam));
  const productsSnapshot = await getDocs(q);
  const documents = productsSnapshot.docs;
  const dataDocs = documents.map((item) => {
    return { id: item.id, ...item.data() };
  });

  return dataDocs;
}

export async function createOrder(orderData) {
  const productsRef = collection(db, "orders");
  const newDoc = await addDoc(productsRef, orderData);
  return newDoc;
}

export default app;
