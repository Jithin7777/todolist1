const express=require('express')
const route=express.Router()

const usercontroller=require('../contollers/userControllers')
const taskController=require('../contollers/taskContoller')
route.post('/userregister',usercontroller.userRegister)
route.post('/userlogin',usercontroller.login)


route.post('/tasks', taskController.createTask);
route.get('/tasks', taskController.getTasks);
route.get('/tasks/:id', taskController.getTaskById);
route.put('/tasks/:id', taskController.updateTask);
route.delete('/tasks/:id', taskController.deleteTask);
module.exports=route;