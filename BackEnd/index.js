const express = require('express')

var mysql = require('mysql')
const app = express()
const port = 3030



//app.get('/checque', (req, res) => {
 //   res.send('checque pass you are great!')
 // })


  // my sql connection

  var connection= mysql.createConnection(
      {
          //properties
          host: 'localhost',
          user: 'root',
          password: ' ',
          database: 'sampelDB'
      }
  );

  connection.connect(function(error){
      if(!!error){
          console.log('error');
      }
      else{
          console.log('connected');
      }
  });



  app.get('/', (req, res) => {
    res.send('Hello World!')
    console.log("connection sucessful")
  })


  app.get('/db', (req, res) => {
    connection.query(" ")
  })



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})





