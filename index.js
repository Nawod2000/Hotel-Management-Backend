import express from 'express';
import bodyParser from 'body-parser';

const app = express()

app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(5000,(req,res)=>{

    console.log("server is runing start port 5000 !");
    
})