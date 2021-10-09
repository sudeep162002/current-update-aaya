import MotionHoc from "./MotionHoc";

const TeamComponent = () => {
  return( 
  <div className="Team-main">
  <form className="row g-3 needs-validation container" action="" method="POST">
            <h1> Health Details</h1>

            <div className="col-md-6">
               <label for="firstName" className="form-label">
                  First name
               </label>
               <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  required
               />
            </div>
            <div className="col-md-6">
               <label for="lastName" className="form-label">
                  Last name
               </label>
               <input type="text" className="form-control" id="lastName" name="lastName" required />
            </div>
            <div className="col-md-3">
               <label for="age" className="form-label">
                  Age
               </label>
               <input type="text" className="form-control" id="age" name="age" required />
            </div>
            <div className="col-md-3">
               <label for="height" className="form-label">
                  Height
               </label>
               <input type="text" className="form-control" id="height" name="height" required />
            </div>
            <div className="col-md-3">
               <label for="weight" className="form-label">
                  Weight
               </label>
               <input type="text" className="form-control" id="weight" name="weight" required />
            </div>
            <div className="col-md-3">
               <label for="bloodGroup" className="form-label">
                  Blood group
               </label>
               <input
                  type="text"
                  className="form-control"
                  id="bloodGroup"
                  name="bloodGroup"
                  required
               />
            </div>

            <div className="col-md-6">
               <label for="bloodSugarLevel" className="form-label">
                  Blood Sugar level
               </label>
               <input
                  type="text"
                  className="form-control"
                  id="bloodSugarLevel"
                  name="bloodSugarLevel"
                  required
               />
            </div>
            <div className="col-md-6">
               <label for="bloodPressureLevel" className="form-label">
                  Blood Pressure level
               </label>
               <input
                  type="text"
                  className="form-control"
                  id="bloodPressureLevel"
                  name="bloodPressureLevel"
                  required
               />
            </div>

            <label className="form-label">Gender</label>
            <span className="inline form-check form-check-inline">
               <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="gender1"
                  value="gender1"
               />
               <label className="inline form-check-label" for="gender1">
                  Male
               </label>
            </span>
            <span className="inline form-check form-check-inline">
               <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="gender2"
                  value="gender2"
               />
               <label className="inline form-check-label" for="gender2">
                  Female
               </label>
            </span>
            <span className="inline form-check form-check-inline">
               <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="gender3"
                  value="gender3"
               />
               <label className="inline form-check-label" for="gender3">
                  Others
               </label>
            </span>

            <div className="form-check form-switch">
               <label className="form-check-label" for="smoke">
                  Do you smoke?
               </label>
               <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="smoke"
                  name="smoke"
               />
            </div>

            <div className="col-">
               <button
                  className="btn btn-primary col-md-12"
                  type="submit"
                  id="submit"
                  name="submit"
               >
                  Submit form
               </button>
            </div>
         </form>
</div>
  )};

const Team = MotionHoc(TeamComponent);

export default Team;
