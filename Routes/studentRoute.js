const express= require("express");
const studentModel = require("../Model/studentModel");
const router=express.Router();

router.use(express.json());
router.get('/',async(req,res)=>{
    try{
        const data=await studentModel.find()
        res.send(data);
    }catch(error){
        console.log(error)
    }
})

//route to add data
router.post('/add',async(req,res)=>{
    try{
        var item=req.body;
        await studentModel(item).save()
        res.send("data added")   
        }
    catch(error){
        console.log(error);
    }
})

//route to update data
router.put('/edit/:id',async(req,res)=>{
    try{
        const fetch_id=req.params.id;
        const item=req.body;
        
      const data =  await studentModel.findByIdAndUpdate(fetch_id,item);
      console.log(data)
        res.status(200).send("data updated");
        }
    catch(error){
        console.log(error);
    }
})

//route to delete data
router.delete('/del/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        await studentModel.findByIdAndDelete(id);
        res.send("data deleted");
        }
    catch(error){
        console.log(error);
    }
})



//export
module.exports=router;
