 const express = require('express');
 const app = express();
 const mongoose= require('mongoose');

 const users = require('./routes/api/users');
 const profile = require('./routes/api/profile');
 const posts = require('./routes/api/posts');
 

 app.get('/', (req, res) => res.send('hello'));

//DB Setup

const db = require('./config/keys.js').mongoURI

//Connect to DB

mongoose
.connect(db)
.then(()=> console.log('MongoDB Connected'))
.catch(err=> console.log(err)); 

//Routes
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)

const port= process.env.PORT || 5000;
 
 app.listen( port, ()=> console.log(`Server running at ${port}`));