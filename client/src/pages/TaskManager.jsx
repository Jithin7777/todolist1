import React, { useState, useEffect } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { getTasks } from "../service/allapi";

const TaskManager = () => {
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error.message);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleEdit = (task) => {
    setTaskToEdit(task);
  };

  const handleSave = () => {
    setTaskToEdit(null);
    fetchTasks(); // refresh the tasks list after saving
  };

  return (
    <div>
      <TaskForm taskToEdit={taskToEdit} onSave={handleSave} />
      <TaskList tasks={tasks} onEdit={handleEdit} onDelete={fetchTasks} />
    </div>
  );
};

export default TaskManager;
