import { app } from "./firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
  onSnapshot,
} from "firebase/firestore";

export const db = getFirestore(app);

export const putData = async (data) => {
  try {
    const dataRef = await addDoc(collection(db, "users"), data);
    console.log("Document ID:", dataRef.id);
  } catch (error) {
    console.log(error);
  }
};

export const getData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() }); // ✅ Keep the ID
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getDocument = async () => {
  try {
    // const docSnap = await getDoc(doc(db, "users", "4yca2fb4eCWeadRiplIH"));
    const docSnap = await db
      .collection("users")
      .doc("4yca2fb4eCWeadRiplIH")
      .get();
    console.log(docSnap.data());
  } catch (error) {
    console.log(error);
  }
};

export const setDocument = async () => {
  try {
    const docRef = collection(db, "users");
    await setDoc(doc(docRef, "4yca2fb4eCWeadRiplIH"), {
      name: "S.ANWAR",
      age: 25,
      gender: "Male",
    });
    console.log("Document successfully written.");
  } catch (error) {
    console.log(error);
  }
};

export const getSnapshot = () => {
  const unsub = onSnapshot(
    doc(db, "users", "4yca2fb4eCWeadRiplIH"),
    (snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.data());
      } else {
        console.log("No such document!");
      }
    }
  );

  return unsub; // ✅ For cleanup
};

export const uploadData = async () => {
  try {
    const result = await setDoc(doc(db, "nike", `${Date.now()}`), {
      name: "sayeed",
      age: 25,
      gender: "male",
    });
    console.log("Document written successfully!");
  } catch (error) {
    console.error("Error writing document:", error);
  }
};
