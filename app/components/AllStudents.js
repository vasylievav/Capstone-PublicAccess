import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchStudents, deleteExistingStudent } from "../redux/students";
import AddStudent from "./AddStudent";


// Notice that we're exporting the AllStudents component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.

export class AllStudents extends React.Component {
  constructor (){
    super()
    this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this)
  };

  componentDidMount (){
    this.props.getStudents();
  };

  handleDeleteButtonClick (id){
    this.props.deleteStudent(id);
  };
  
  render() {
    return (
      <div id ="students">
        <AddStudent/>
        <div id="student-list">  
        <h2>All Students</h2>
          {
            this.props.students.map((student) => {
              const studentID = student.id;
              return (
              <div className ="individual-student" key={student.id}>
                <NavLink to={`/students/${student.id}`}>
                <div>{`${student.firstName} ${student.lastName}`}</div>
                </NavLink>
                <button onClick={() => this.handleDeleteButtonClick(studentID)}>X</button>
                <br/>
              </div>
              )
            })
          }
        </div>  
      </div>
    );
  }
};

const mapState = (state) => {
  return {
    students: state.students
  };
};

const mapDispatch = (dispatch) => {
  return {
    getStudents: () => dispatch(fetchStudents()),
    deleteStudent: (id) =>dispatch(deleteExistingStudent(id))
  };
};

export default connect(mapState, mapDispatch)(AllStudents);
