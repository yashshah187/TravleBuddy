const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const destinationRouter=require('./routes/destination-router');
const userRouter=require('./routes/user-router');



const db = require('./db')

const app=express();
const apiPort=3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.get('/',(req,res)=>{
    res.send('Hello World!')
});

app.use('/destinationApi',destinationRouter);
app.use('/userApi',userRouter);
app.listen(apiPort,()=>console.log(`Server running on port ${apiPort}`))
