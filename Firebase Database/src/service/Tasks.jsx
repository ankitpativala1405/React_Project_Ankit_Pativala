import { collection , addDoc , updateDoc , deleteDoc , doc, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

const taskCollection = collection(db , "AllTasks")


const TaskList = {
CreateTask : async(task) =>{
  try{
    await addDoc(taskCollection , task)
  } 
  catch(err){
    console.log("Error Adding Task" , err);
  }
},
GetTask :  async() => {
  try{
    const taskslot = await getDocs(taskCollection)
    return taskslot.docs.map((task) => ({
      id:task.id,
      ...task.data()
    }))
  }
  catch(err){
    console.log("Error Getting Task" , err);
  }
},
UpdateTask : async(id , updatedTask) => {
  try{
    await updateDoc(doc(db , "tasks" , id), updatedTask)
  }
  catch(err){
    console.log("Error Updating Task" , err);
  }
},
RemoveTask : async(id) => {
  try{
    await deleteDoc(doc(db , "tasks" , id))
  }
  catch(err){
    console.log("Error Deleteing Task" , err);
  }
}
}

export default TaskList