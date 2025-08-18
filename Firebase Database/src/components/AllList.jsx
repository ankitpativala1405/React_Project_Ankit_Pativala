import { useEffect, useState } from "react";
import TaskList from "../service/Tasks";

const AllList = () => {
  const [task, setTask] = useState([]);

  console.log("tasks", task);

  const fetchData = async () => {
    const data = await TaskList.GetTask();
    setTask(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
                    <TaskItem data={"true"} task={item} onUpdate={fetchData} />
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
