// - Write a component to display a single student with the following information:
//   - [ ] The student's full name, email, image, and gpa
//   - [ ] The name of their campus (or a helpful message if they don't have one)
// - [ ] Display the appropriate student when the url matches `/students/:studentId`
import React from "react";
import { connect } from "react-redux";
import campusesReducer from "../redux/campuses";
import { fetchSingleStudent } from "../redux/singleStudent";

export class SingleStudent extends React.Component {
  componentDidMount (){
    this.props.getSingleStudent(this.props.match.params.studentId);
  };

  render() {
    const student = this.props.singleStudent;
    return (
      <div className="single-student-page">
        <h1>{`${student.firstName} ${student.lastName}`}</h1>
        <h2>{student.email}</h2>
        <img src={student.imageUrl}/>
        <h2>{`GPA: ${student.gpa}`}</h2>
        <h2>Student's Campus</h2>
        <div>{!student.campus?"Has no Campus":student.campus.name}</div>
      </div>
    )
  }
};

const mapState = (state) => {
  return {
    singleStudent: state.singleStudent
  }
};

const mapDispatch = (dispatch) => {
  return {
    getSingleStudent: (id) => dispatch(fetchSingleStudent(id))
  };
};

export default connect(mapState, mapDispatch)(SingleStudent);