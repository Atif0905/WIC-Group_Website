const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const User = require("./models/User")
const app = express();

app.use(cors())
app.use(express.json());

mongoose.connect("mongodb+srv://Wic:RbXlblUCuUN3T5bz@atlascluster.qrtksmu.mongodb.net/")


app.post('/register', async (req,res) =>{
    const {username, password} = req.body
    try{
        const Userdoc = await  User.create({username,password})
        res.json(Userdoc)
    }
    catch(err){
      res.status(400).json(e)
    }


});

app.listen(4000);