
import React, { useState, useEffect } from 'react';
import { Form, Button, Container, FloatingLabel } from 'react-bootstrap';
import { createTask, updateTask } from '../service/allapi';
import TaskList from './TaskList';

const TaskForm = ({ taskToEdit, onSave }) => {
    const [taskData, setTaskData] = useState({
        title: ''
    });

    useEffect(() => {
        if (taskToEdit) {
            setTaskData({
                title: taskToEdit.title
            });
        }
    }, [taskToEdit]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTaskData({
            ...taskData,
            [name]: value
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            if (taskToEdit) {
                await updateTask(taskToEdit._id, taskData);
                alert("Task updated successfully")
            } else {
                await createTask(taskData);
                alert("Task created successfully")
            }
            onSave(); 
            setTaskData({
                title: ''
            });
        } catch (error) {
            console.error('Task save failed:', error.message);
        }
    };

    return (
        <Container className='w-50 mt-5 bg-black ' style={{borderRadius:'10px'}} >
            <h2 className='text-center   text-white'>{taskToEdit ? 'Edit Task' : 'Create Task'}</h2>
            <Form onSubmit={handleFormSubmit} className="bg-black p-5  rounded-lg shadow-lg mt-3 text-white" style={{borderRadius:'10px'}}>
                <FloatingLabel controlId="floatingInput" label="What is the task today?" className="mb-3">
                    <Form.Control
                        type="text"
                        name="title"
                        value={taskData.title}
                        onChange={handleInputChange}
                        placeholder="Enter task title"
                        required
                        className="border-2 border-gray-300"
                        style={{ backgroundColor: 'black',color:'white' }}

                    />
                </FloatingLabel>
                <Button className='mt-3' variant="primary" type="submit">
                    {taskToEdit ? 'Update Task' : 'Create Task'}
                </Button>
                </Form>
                
        </Container>
    );
};

export default TaskForm;




















// import React, { useState, useEffect } from 'react';
// import { Form, Button, Container, FloatingLabel } from 'react-bootstrap';
// import { createTask, updateTask } from '../service/allapi';

// const TaskForm = ({ taskToEdit, onSave }) => {
//     const [taskData, setTaskData] = useState({
//         title: '',
//         description: '',
//         completed: false
//     });

//     useEffect(() => {
//         if (taskToEdit) {
//             setTaskData({
//                 title: taskToEdit.title,
//                 description: taskToEdit.description,
//                 completed: taskToEdit.completed
//             });
//         }
//     }, [taskToEdit]);

//     const handleInputChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setTaskData({
//             ...taskData,
//             [name]: type === 'checkbox' ? checked : value
//         });
//     };

//     const handleFormSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             if (taskToEdit) {
//                 await updateTask(taskToEdit._id, taskData);
//             } else {
//                 await createTask(taskData);
//             }
//             onSave(); // Call the onSave callback after saving
//             setTaskData({
//                 title: '',
//                 description: '',
//                 completed: false
//             });
//         } catch (error) {
//             console.error('Task save failed:', error.message);
//         }
//     };

//     return (
//         <Container className='w-50 mt-5'>
//             <h1 className='text-center mt-5'>{taskToEdit ? 'Edit Task' : 'Create Task'}</h1>
//             <Form onSubmit={handleFormSubmit} className="bg-white p-5 rounded-lg shadow-lg">
//                 <FloatingLabel controlId="floatingInput" label="what is the task today" className="mb-3">
//                     <Form.Control
//                         type="text"
//                         name="title"
//                         value={taskData.title}
//                         onChange={handleInputChange}
//                         placeholder="Enter task title"
//                         required
//                         className="border-2 border-gray-300"
//                     />
//                 </FloatingLabel>
//                 {/* <FloatingLabel controlId="floatingTextarea" label="Task Description" className="mb-3">
//                     <Form.Control
//                         as="textarea"
//                         name="description"
//                         value={taskData.description}
//                         onChange={handleInputChange}
//                         placeholder="Enter task description"
//                         required
//                         className="border-2 border-gray-300"
//                     />
//                 </FloatingLabel> */}
//                 <Form.Check 
//                     type="checkbox" 
//                     id="completedCheckbox" 
//                     label="Completed" 
//                     name="completed" 
//                     checked={taskData.completed}
//                     onChange={handleInputChange}
//                     className="mb-3"
//                 />
//                 <Button className='mt-3' variant="primary" type="submit">
//                     {taskToEdit ? 'Update Task' : 'Create Task'}
//                 </Button>
//             </Form>
//         </Container>
//     );
// };

// export default TaskForm;




