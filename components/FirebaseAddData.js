import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase.config";

// Example function to add a student
export default async function addStudent(studentData) {
  const newStudent = {
    name: studentData,
  };

  try {
    const docRef = await addDoc(collection(db, "students"), newStudent);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
