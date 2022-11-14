const mongoose = require("mongoose");
const studentSchema=new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
     email : {
         type:String,
         required:true,
         unique:true

     },
    mobilenumber : {
         type:Number,
         required:true,
         unique:true
     },
     password : {
         type:String,
         required:true
     },
     gender : {
         type:String,
         required:true
    },
    skilllevel : {
        type:String,
        required:true
    },
    qualification :{
        type:String,
        required:true
        
    }


})
const interncore= new mongoose.model("interncore", studentSchema);
module.exports=interncore;
