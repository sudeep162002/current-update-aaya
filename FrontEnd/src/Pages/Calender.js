import MotionHoc from "./MotionHoc";
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import React, {useState,useEffect} from "react";
import axios from 'axios';


const CalenderComponent = () => {

  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [age, setAge] = useState();
  const [blood_group, setBlood_group] = useState();
  const [blood_pressure, setBlood_pressure] = useState();
  const [blood_sugar_level, setBlood_sugar_level] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

useEffect(()=>{
  axios.get(`http://localhost:3030/get_report`)
  .then(function (response) {
    console.log(response.data.reportData);
    console.log(response.data.reportData[1].name);
   // setSurname()
   // setAge()
   // setWeight()
   // setHeight()
   // setBlood_sugar_level()
   // setBlood_pressure()
   // setBlood_group()

  })
  .catch(function(error) {
    console.log(error);
  });


},[])
 

 
  return( 
    <div class="Calender-main">

      
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="public/doctor-re" />
  <Card.Body>
    <Card.Title>Your previous health states</Card.Title>
    <Card.Text>
      <p>your name- {name} </p>
      <p>your name- {name} </p>
      <p>your name- {name} </p>
      <p>your name- {name} </p>
      <p>your name- {name} </p>
      <p>your name- {name} </p>
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>





  </div>
    )
};

const Calender = MotionHoc(CalenderComponent);

export default Calender;
