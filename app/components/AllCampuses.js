import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchCampuses, deleteExistingCampus } from "../redux/campuses";
import AddCampus from "./AddCampus";



// Notice that we're exporting the AllCampuses component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.

export class AllCampuses extends React.Component {
  constructor(){
    super()
    this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this)
  }

  componentDidMount (){
    this.props.getCampuses();
  };

  handleDeleteButtonClick (id){
    this.props.deleteCampus(id);
  };

  render() {
    return (
    <div id ="campuses">
      <AddCampus/>
      <h2>All Campuses</h2>
      {
        this.props.campuses.map((campus) => {
          const campusID=campus.id
          return (
            <div className ="individual-campus" key={campus.id} >
              <NavLink to={`/campuses/${campus.id}`}>
              <div>{campus.name}</div>
              <img src ={campus.imageUrl}/>
              </NavLink>
              <button onClick={() =>this.handleDeleteButtonClick(campusID)}>X</button>
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
    getCampuses: () => dispatch(fetchCampuses()),
    deleteCampus: (id) => dispatch(deleteExistingCampus(id))
  };
};

export default connect(mapState, mapDispatch)(AllCampuses);
