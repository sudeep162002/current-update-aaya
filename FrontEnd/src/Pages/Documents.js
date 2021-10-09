import MotionHoc from "./MotionHoc";

const DocumentsComponent = () => {
  return( 
    <div class="Document">
    <h1>Documents</h1>
    <h2>This project is made by team AAYA ----</h2>
     <h2> Members--</h2>
    <h3> <b> 1> sudeep - Team-leader</b></h3>
    <h3> <b> 2> Aniket - Database master</b></h3>
      <h3> <b> 3> Lakshay - frontend master</b></h3>
        <h3> <b> 4> Jugnu - Management master</b></h3>
    

  </div>
    )
};

const Documents = MotionHoc(DocumentsComponent);

export default Documents;
