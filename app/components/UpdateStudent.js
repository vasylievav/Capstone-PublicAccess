import React from "react";
import { connect } from "react-redux";
import { updateStudent } from "../redux/singleStudent";

export class UpdateStudent extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      firstName: this.props.student.firstName,
      lastName: this.props.student.lastName, 
      email: this.props.student.email
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
    this.props.updateSingleStudent(this.state, this.props.student.id);
  };

  render() {
    return (
      <div className="update-student-form">
        <h3>Update Student</h3>
        <form onSubmit={this.handleSubmit}>
          <p>New First Name</p>
          <input type="text" onChange={this.handleFirstNameChange}/>
          <p>New Last Name</p>
          <input type="text" onChange={this.handleLastNameChange}/>
          <p>New Email</p>
          <input type="text" onChange={this.handleEmailChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
};

const mapDispatch = dispatch => (
  {
    updateSingleStudent: (student, id) => dispatch(updateStudent(student, id))
  }
);

export default connect(null, mapDispatch)(UpdateStudent);
