import React from "react";
import { connect } from "react-redux";
import { fetchSigleCampus } from '../redux/singleCampus'

export class SingleCampus extends React.Component {
  componentDidMount (){
    //console.log ('this props=', this.props.match.params.campusId)
    this.props.getSingleCampus(this.props.match.params.campusId);
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
              <div key ={student.id}>{`${student.firstName} ${student.lastName}`}</div>
          )
        })}
        </div>
        <div>{!campus.students.length?"No students assigned so far":null}</div>
      </div>    
    )    
  }
};

const mapState = (state) => {
  return {
    singleCampus: state.singleCampus
  }
};

const mapDispatch = (dispatch) => {
  return {
    getSingleCampus: (id) => dispatch(fetchSigleCampus(id))
  };
};

export default connect(mapState, mapDispatch)(SingleCampus)