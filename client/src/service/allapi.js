import axios from "axios";

const API_URL = "http://localhost:7003";

export const userRegister = async (body) => {
  return await axios.post(`${API_URL}/userregister`, body);
};

export const userLogin = async (body) => {
  return await axios.post(`${API_URL}/userlogin`, body);
};




//create new task
export const createTask = async (body) => {
  return await axios.post(`${API_URL}/tasks`, body);
};

//get all tasks

export const getTasks = async () => {
  return await axios.get(`${API_URL}/tasks`);
};

//get a task by id

export const getTaskById = async (id) => {
  return await axios.get(`${API_URL}/tasks/${id}`);
};

//update a task by id

export const updateTask = async (id, body) => {
  return await axios.put(`${API_URL}/tasks/${id}`, body);
};

// Delete a task by ID
export const deleteTask = async (id) => {
  return await axios.delete(`${API_URL}/tasks/${id}`);
};
