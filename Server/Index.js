const express = require("express")
const cors = require("cors")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose")
const User = require("./models/User")
const app = express();

const salt = bcrypt.genSaltSync(10);
const secret = "bdchvoiqdwkjhcvywcwcgwjwqn"

app.use(cors({credentials:true,origin:'http://localhost:3000'}))
app.use(express.json());
app.use(cookieParser());
app.use(express.json());

mongoose.connect("mongodb+srv://Womeki:bbZWMWIhMDWQ5bi2@cluster0.f5ozdcn.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true, // Enable SSL/TLS
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const Userdoc = await User.create({
            username,
            password: bcrypt.hashSync(password, salt),
        });
        res.json(Userdoc);
    } catch (err) { // Change 'e' to 'err'
        res.status(400).json(err); // Change 'e' to 'err'
    }
});
app.post('/login', async (req,res) => {
  const {username,password} = req.body;
  const userDoc = await User.findOne({username});
  const passOk = bcrypt.compareSync(password, userDoc.password);

  if (passOk) {
    // logged in
    jwt.sign({username,id:userDoc._id}, secret, {}, (err,token) => {
      if (err) throw err;
      res.cookie('token', token).json({
        id:userDoc._id,
        username,
      });
    });
  } else {
    res.status(400).json('wrong credentials');
  }
});
app.listen(4000);

// mongo pass = bbZWMWIhMDWQ5bi2
// id = Womeki