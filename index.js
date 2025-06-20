import express from 'express';

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(5000,(req,res)=>{

    console.log("server is runing start port 5000 !");
    
})