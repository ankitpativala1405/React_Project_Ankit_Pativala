import { useEffect, useState } from "react";
import TaskList from "../service/Tasks";

const AddTaskForm = ({ editingTask, setEditingTask }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });


  useEffect(() => {
    if (editingTask) {
      setFormData({
        title: editingTask.title,
        description: editingTask.description,
      });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    if (editingTask) {
      await TaskList.UpdateTask(editingTask.id, formData);
      setEditingTask(null);
    } else {
      const newTask = {
        ...formData,
        completed: false,
        createdAt: new Date().toISOString(),
      };

      await TaskList.CreateTask(newTask);
    }


    setFormData({ title: "", description: "" });
    window.location.reload()
  };

  return (
    <>
      <div className="h-fit flex items-center w-full justify-center">
        <div className="container mx-auto ">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-2xl p-6 space-y-4 border border-gray-200"
          >
            <h3 className="text-xl font-bold text-gray-800 text-center">
              {editingTask ? "Edit Task" : "Add New Task"}
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Task Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter task title..."
                required
                value={formData.title}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Enter task description..."
                value={formData.description}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg shadow-md transition"
            >
               {editingTask ? "Update Task" : "Add Task"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTaskForm;
