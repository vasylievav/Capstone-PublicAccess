import React from "react";
import { connect } from "react-redux";
import { updateCampus } from "../redux/singleCampus";

export class UpdateCampus extends React.Component {
  constructor (props) {
    super(props);
    this.state ={
      name:this.props.campus.name, 
      address:this.props.campus.address
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange =this.handleNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
  };

  handleNameChange (event) {
    this.setState({name: event.target.value})
  };

  handleAddressChange (event) {
    this.setState ({address: event.target.value})
  };

  handleSubmit (event) {
    event.preventDefault();
    this.props.updateSingleCampus(this.state, this.props.campus.id);
  };

  render() {
    return (
      <div className="update-campus-form">
      <h3>Update Campus Information</h3>
      <form onSubmit={this.handleSubmit} >
        <p>New Name</p>
        <input id ="nameInput" type="text" onChange={this.handleNameChange} />
        <p>New Adress</p>
        <input type="text" onChange={this.handleAddressChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
    )
  }
};

const mapDispatch = (dispatch) => {
  return {
    updateSingleCampus: (campus, id) => dispatch(updateCampus(campus, id))
  }
};

export default connect(null, mapDispatch)(UpdateCampus);
