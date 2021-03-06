import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchSigleCampus, unregisterSigleCampus } from "../redux/singleCampus";
import UpdateCampus from "./UpdateCampus";

export class SingleCampus extends React.Component {
  constructor () {
    super();
    this.handleUnregisterClick = this.handleUnregisterClick.bind(this);
  };

  componentDidMount (){
    this.props.getSingleCampus(this.props.match.params.campusId);
  };

  handleUnregisterClick (id) {
    this.props.unregisterStudent(id);
  };

  render() {
    const campus = this.props.singleCampus;
    if (!campus.students) return null;
    return (
      <div className="sigle-campus-page">
        <h1>{campus.name}</h1>
        <img src={campus.imageUrl}/>
        <h2>{campus.address}</h2>
        <h2>{campus.description}</h2>
        <h2>Assigned students:</h2>
        <div>
         {campus.students.map (student => {
            return (
              <div className="students-assigned" key ={student.id}>
              <NavLink to={`/students/${student.id}`}>
                <div>{`${student.firstName} ${student.lastName}`}</div>
              </NavLink>  
              </div>
          )
        })}
        </div>
        <div>{!campus.students.length?"No students assigned so far":null}</div>
        <UpdateCampus campus={campus}/>
      </div>    
    )    
  }
};

const mapState = (state) => {
  return {
    singleCampus: state.singleCampus
  };
};

const mapDispatch = (dispatch) => {
  return {
    getSingleCampus: (id) => dispatch(fetchSigleCampus(id)),
    unregisterStudent: (id) => dispatch(unregisterSigleCampus(id))
  };
};

export default connect(mapState, mapDispatch)(SingleCampus);