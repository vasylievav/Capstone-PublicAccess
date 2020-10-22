import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchCampuses } from "../redux/campuses"
import SingleCampus from "./SingleCampus";

// Notice that we're exporting the AllCampuses component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.

export class AllCampuses extends React.Component {
  componentDidMount (){
    this.props.getCampuses();
  }

  render() {
    return (
    <div id ="campuses">
      <h2>All Campuses</h2>
      {
        this.props.campuses.map((campus) => {
          return (
            <div className ="individual-campus" key={campus.id} >
              <NavLink to={`/campuses/${campus.id}`}>
              <div>{campus.name}</div>
              <img src ={campus.imageUrl}/>
              </NavLink>
            </div>
          )
        })
      }
    </div>
    )
  }
}

const mapState = (state) => {
  return {
    campuses:state.campuses
  };
};

const mapDispatch = (dispatch) => {
  return {
    getCampuses: ()=>dispatch(fetchCampuses())
  };
};

export default connect(mapState, mapDispatch)(AllCampuses);
