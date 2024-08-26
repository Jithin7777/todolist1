import { Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterForm from './pages/RegisterForm';
import Login from './pages/Login';
import TaskManager from './pages/TaskManager';

function App() {
  return (
    <div className="App">

<Routes>
        <Route path='/' element={<RegisterForm></RegisterForm>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/taskmanager' element={<TaskManager></TaskManager>}></Route>
  </Routes>
    </div>
  );
}

export default App;
