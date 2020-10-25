import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchSingleStudent } from "../redux/singleStudent";
import UpdateStudent from "./UpdateStudent";

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
        <h2>{student.gpa ? `GPA: ${student.gpa}`:
           "GPA: Not avaliable at this time" }
        </h2>
        <h2>Student's Campus</h2>
        <div>
          {!student.campus?"Has no Campus":
            <NavLink to={`/campuses/${student.campus.id}`}>{student.campus.name}</NavLink> 
          }
        </div>
        <UpdateStudent student={student}/>
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