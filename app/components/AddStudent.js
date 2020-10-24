import React from "react";
import { connect } from "react-redux";
import { addStudent } from "../redux/students";

export class AddStudent extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    };
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleFirstNameChange (event) {
    this.setState ({firstName: event.target.value})
  };

  handleLastNameChange (event) {
    this.setState ({lastName: event.target.value})
  };

  handleEmailChange (event) {
    this.setState ({email: event.target.value})
  };

  handleSubmit (event) {
    event.preventDefault();
    this.props.createStudent(this.state);
  };

  render () {
    return (
      <div className="add-student-form">
        <h3>Add New Student</h3>
        <form onSubmit={this.handleSubmit}>
          <p>First Name</p>
          <input type="text" onChange={this.handleFirstNameChange}/>
          <p>Last Name</p>
          <input type="text" onChange={this.handleLastNameChange}/>
          <p>Email</p>
          <input type="text" onChange={this.handleEmailChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
};

const mapDispatch = dispatch => (
  {
    createStudent: newStudent => dispatch(addStudent(newStudent))
  }
);

export default connect(null,mapDispatch)(AddStudent);
