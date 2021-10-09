import MotionHoc from "./MotionHoc";

const TeamComponent = () => {
  return( 
  <div className="Team-main">
  <h1>Team</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto exercitationem aut impedit neque officia? Nobis non est odio veritatis consequuntur vero nemo ad incidunt magni excepturi! Vero nostrum earum illo voluptatibus enim quam ullam reprehenderit reiciendis magnam quasi, ipsum quae fuga quia repudiandae. Voluptas dicta quaerat quam voluptatibus sapiente doloribus, quasi id consectetur odit magnam fugiat nobis? Debitis, necessitatibus?</p>
</div>
  )};

const Team = MotionHoc(TeamComponent);

export default Team;
