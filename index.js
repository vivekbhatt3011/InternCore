const express= require("express");
const path=require("path");
const app=express();
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/interncore",{
  
}).then(()=>{
    console.log(`connection successful`);

}).catch((e)=>{
    console.log(`no connection`);
})
const interncore= require("./models/registers");
const port=process.env.PORT ||3000;
const static_path=path.join(__dirname, "../public" );
const template_path=path.join(__dirname, "../template/views" );
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path)
app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/register",(req,res)=>{
    res.render("register");
})
app.post("/register", async (req,res)=>{
    console.log("register");
    try {
        const student=new interncore({
            name:req.body.UserName,
             email:req.body.email,
             mobilenumber:req.body.mobilenumber,
             password:req.body.password,
            gender:req.body.gender,
            skilllevel:req.body.skilllevel,
            qualification:req.body.qualification
        });
        console.log(student);
        const registered= await student.save();
        res.status(201).render("index");
    } catch (error) {
        res.status(400).send(error);
    }
})

app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})
