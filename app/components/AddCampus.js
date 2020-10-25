import React from  "react";
import { connect } from "react-redux";
import { addCampus } from "../redux/campuses";

export class AddCampus extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      name: '',
      address: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
  };

  handleNameChange (event) {
    this.setState ({name: event.target.value})
  };

  handleAddressChange (event) {
    this.setState ({address: event.target.value})
  };

  handleSubmit (event) {
    event.preventDefault();
    this.props.createCampus(this.state);
  };

  render() {
    return (
      <div className="add-campus-form">
        <h3>Add New Campus</h3>
        <form onSubmit={this.handleSubmit}>
          <p>Name</p>
          <input id ="nameInput" type="text" onChange={this.handleNameChange}/>
          <p>Adress</p>
          <input type="text" onChange={this.handleAddressChange}/>
          <br/>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
};

const mapDispatch = dispatch => (
  {
    createCampus: newCampus => dispatch(addCampus(newCampus))
  }
);

export default connect(null,mapDispatch)(AddCampus);
