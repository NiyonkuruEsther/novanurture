import { addDoc, collection, doc, getDocs,updateDoc } from "firebase/firestore";
import { firestoreDB } from "../FirebaseConfig";

export const writeUserData = async (data) => {
  console.log(data);
  await addDoc(collection(firestoreDB, "users"), { ...data });
};

export const createPost= async (data)=>{
  console.log(data);
  await addDoc(collection(firestoreDB, "posts"), { ...data });
}

export const readPosts = async () => {
  let posts=[];
  await getDocs(collection(firestoreDB, "posts"))
  .then(
    (res) => {
      res.forEach((doc) => {
        posts.push({ ...doc.data()});
      });
    }
  ).catch(()=>{
    console.error("Error getting posts: ", error);
  }
  )
  return posts;
}

export const editUser=async(id,data)=>{
 
  console.log(data);
  await updateDoc(doc(firestoreDB, "users", id), { ...data });
  await localStorage.setItem("user", JSON.stringify({id:id,...data}));

}

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
