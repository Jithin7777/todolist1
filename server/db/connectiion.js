const mongoose=require('mongoose')
const connectionString=process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log("MONGODB ATLAS CONNECTED");
}).catch((error)=>{
    console.log(`mongodb atlas connection failed ${error}`);
})