const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const app = express();

const authRouter = require('./routes/authRouter');
dotenv.config({path: path.join(__dirname,'config','config.env')});
app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/auth',authRouter);

mongoose.connect(process.env.DB_URL).then(()=>console.log('DB connected...')).catch(err => console.log(err));
app.listen(process.env.PORT,()=>{
    console.log(process.env.NODE_ENV,'server is running at ',process.env.PORT,' port...');
});