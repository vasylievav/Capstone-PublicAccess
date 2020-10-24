import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchStudents } from "../redux/students";
import AddStudent from "./AddStudent";


// Notice that we're exporting the AllStudents component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.

export class AllStudents extends React.Component {
  componentDidMount (){
    this.props.getStudents();
  };

  render() {
    return (
      <div id ="students">
        <AddStudent/>
        <h2>All Students</h2>
        {
          this.props.students.map((student) => {
            return (
            <div className ="individual-student" key={student.id}>
              <NavLink to={`/students/${student.id}`}>
              <div>{`${student.firstName} ${student.lastName}`}</div>
              </NavLink>
            </div>
            )
          })
        }
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    students: state.students
  };
};

const mapDispatch = (dispatch) => {
  return {
    getStudents: () => dispatch(fetchStudents())
  };
};

export default connect(mapState, mapDispatch)(AllStudents);
