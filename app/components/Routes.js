import React from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import AllCampuses from "./AllCampuses";
import AllStudents from "./AllStudents";
import SingleCampus from "./SingleCampus";


const Routes = () => {
  return (
    <Router>
      <div>
        <nav>Welcome!
          <Link to="/students">All students view</Link>
          <Link to="/campuses">All campuses view</Link>
        </nav>
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
          {/* <p>This seems like a nice place to get started with some Routes!</p> */}
          <Route exact path="/students" component={AllStudents}/>
          <Route exact path="/campuses" component={AllCampuses}/>
          <Route exact path="/campuses/:campusId" component={SingleCampus}/>
        </main>
      </div>
    </Router>
  );
};

export default Routes;
