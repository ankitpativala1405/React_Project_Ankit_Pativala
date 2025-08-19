import { useEffect, useState } from "react";
import TaskList from "../service/Tasks";

const AllList = ({ setEditingTask }) => {
  const [task, setTask] = useState([]);

  console.log("tasks", task);

  const fetchData = async () => {
    const data = await TaskList.GetTask();
    setTask(data);
  };

  useEffect(() => {
    fetchData();
  }, []);


  const handleDelete = async (id) => {
    const UserChoise = window.confirm(`Are You Sure To Delete Task ..... Press "OK" ro Delete Task or Click "CANCEL" To Stayed Task.....`)
    if (UserChoise) {
      await TaskList.RemoveTask(id)
      fetchData();
    }
  }

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">
        Tasks <span className="text-gray-500"></span>
      </h2>
      {task.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {task.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>
                    <div className="mt-3 flex gap-2">
                      <button
                        onClick={() => setEditingTask(item)}
                        className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h2>Not Show Task Yet</h2>
      )}
    </div>
  );
};

export default AllList;
