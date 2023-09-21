const express = require("express")
const cors = require("cors")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose")
const Post = require('./models/Post')
const User = require("./models/User")
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });
const fs = require('fs')

const app = express();

const salt = bcrypt.genSaltSync(10);
const secret = "bdchvoiqdwkjhcvywcwcgwjwqn"

app.use(cors({credentials:true,origin:'http://localhost:3000'}))
app.use(express.json());
app.use(cookieParser());
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

mongoose.connect("mongodb+srv://Womeki:bbZWMWIhMDWQ5bi2@cluster0.f5ozdcn.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true,
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
app.get('/profile', (req,res) => {
  const {token} = req.cookies;
  jwt.verify(token, secret, {}, (err,info) => {
    if (err) throw err;
    res.json(info);
  });
});
app.post('/logout', (req,res) => {
  res.cookie('token', '').json('ok');
});

app.post('/post', uploadMiddleware.single('file'),async (req,res) =>{
  const {originalname,path} = req.file;
  const parts = originalname.split('.');
  const ext = parts[parts.length - 1];
  const newPath = path+'.'+ext
  fs.renameSync(path,newPath )

  const {title,summary, content} = req.body;
   
  const postDoc = await Post.create({
    title,
    summary,
    content,
    cover:newPath,
  })
  console.log(postDoc)


 res.json(postDoc)
})

app.get('/post', async(req, res) =>{
  res.json(await Post.find());
})
app.listen(4000);

// mongo pass = bbZWMWIhMDWQ5bi2
// id = Womeki