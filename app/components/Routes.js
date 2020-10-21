import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllCampuses from "./AllCampuses";
import AllStudents from "./AllStudents";


const Routes = () => {
  return (
    <Router>
      <div>
        <nav>Welcome!</nav>
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
          {/* <p>This seems like a nice place to get started with some Routes!</p> */}
          <Route exact path="/students" component={AllStudents}/>
          <Route exact path="/campuses" component={AllCampuses}/>
        </main>
      </div>
    </Router>
  );
};

export default Routes;
