require('dotenv').config()
const express=require('express')
const cors=require('cors')
const routes=require('./routes/routes')
require('./db/connectiion')
const projectServer=express()
projectServer.use(cors())

projectServer.use(express.json())
projectServer.use(routes)
const PORT=7003
projectServer.listen(PORT,()=>{
    console.log(`projectsservedr started at port nomber ${PORT}`);
})