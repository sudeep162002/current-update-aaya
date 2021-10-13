//important declairation-------------------------------------------------------------------------------
const express = require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const report= require('./db');
const { request } = require('express');
var cors= require('cors');

const app = express()
const port = 3030


app.use(bodyParser.json());
app.use(cors());


// mongodb connect-------------------------------------------------------------------------------------------
mongoose.connect(`mongodb+srv://sudeep162002:sudeep%4016@cluster0.r9zwm.mongodb.net/aaya?retryWrites=true&w=majority`,{
  useNewUrlParser: true,
  //useCreatIndex: true,
  useUnifiedTopology: true,
  //useFindAndModify: false
}).then(()=>{
  console.log(`connection sucessful with database you are great sudeep`)
}).catch((error)=>console.log(error))


//sending data to mongodb---------------------------------------------------------------------------------------
app.post('/post_report', (req, res) => {
  const reportdb= new report({
    
    name: req.body.name,
    surname: req.body.surname,
    age: req.body.age,
    height: req.body.height,
    weight: req.body.weight,
    blood_group: req.body. blood_group,
    blood_sugar_level: req.body.blood_sugar_level,
    blood_pressure: req.body.blood_pressure
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

// get all the report present in database----------------------------------------------------------------------
  app.get('/get_report', (req, res) => {
    report.find()
    .then(result=>{
      console.log(result);
      res.status(200).json({
        reportData: result
      });
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({
        error: err
      });

    })
  
  })

//lishtening ports-------------------------------------------------------------------------------------------

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})





