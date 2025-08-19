import { useState } from "react";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import AllList from "./components/AllList";

function App() {
  const [editingTask, setEditingTask] = useState(null);
  return (
    <>
      <div className="container mx-auto">
        <AddTaskForm editingTask={editingTask} setEditingTask={setEditingTask} />
        <AllList setEditingTask={setEditingTask} />
      </div>
    </>
  );
}

export default App;
