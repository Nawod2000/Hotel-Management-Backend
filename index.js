import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express()

app.use(bodyParser.json())

const connectionString = "mongodb+srv://sanithunawod:12345@cluster0.abqpzjk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose.connect(connectionString).then(
    ()=>{
        console.log("connected to database")
    }

).catch(
    ()=>{
        console.log("failed to connect to database")
    }
)

app.listen(5000,(req,res)=>{

    console.log("server is runing start port 5000 !");
    
})