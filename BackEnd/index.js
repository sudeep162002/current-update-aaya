//important declairation-------------------------------------------------------------------------------
const express = require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const report= require('./db');
const { request } = require('express');
//const cors= require('cors');

const app = express()
const port = 3030


app.use(bodyParser.json());
//app.use(cors());


// mongodb connect-------------------------------------------------------------------------------------------
mongoose.connect(`mongodb+srv://sudeep162002:sudeep%4016@cluster0.r9zwm.mongodb.net/aaya?retryWrites=true&w=majority`,{
  useNewUrlParser: true,
  //useCreatIndex: true,
  useUnifiedTopology: true,
  //useFindAndModify: false
}).then(()=>{
  console.log(`connection sucessful from db`)
}).catch((error)=>console.log(error))


//sending data to mongodb---------------------------------------------------------------------------------------
app.post('/checque', (req, res) => {
  const reportdb= new report({
    id: req.body.id,
    name: req.body.name,
    surname: req.body.surname
  })
  reportdb.save()
  .then(result=>{
    console.log(result);
    res.status(200).json({
      newReport:result
    })
  })

  .catch(error=>{
    console.log(error)
    res.status(500)
  })



})


//random checker routs--------------------------------------------------------------------------------------

  app.get('/', (req, res) => {
    res.send('Hello World!')
    
  })


  app.get('/report', (req, res) => {
    console.log(req.body)
    res.send('sucessufully done the request')
  
  })

//lishtening ports-------------------------------------------------------------------------------------------

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})





