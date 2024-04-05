import { addDoc, collection, getDocs } from "firebase/firestore";
import { firestoreDB } from "../FirebaseConfig";

export const writeUserData = async (data) => {
  console.log(data);
  await addDoc(collection(firestoreDB, "users"), { ...data });
};

export const readUsers = async () => {
  let arr = [];

  await getDocs(collection(firestoreDB, "users"))
    .then((res) => {
      res.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });
    })
    .catch((error) => {
      console.error("Error getting users: ", error);
    });
  return arr;
};
