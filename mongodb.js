const mongoose=require("mongoose");
let compass_url='mongodb://localhost:27017/studentdb';
let mongodb_url = 'mongodb+srv://sandra:blehbleh@cluster0.lzbkklw.mongodb.net/data?retryWrites=true&w=majority&appName=Cluster0'

mongoose
.connect(mongodb_url)
.then(()=>{
    console.log("db connected");
})
.catch((err)=>{
    console.log(err);
});

