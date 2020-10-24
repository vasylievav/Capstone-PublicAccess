import React from "react";
import { connect } from "react-redux";

export class AddStudent extends React.Component {
  render () {
    return (
      <div className="add-student-form">
        <h3>Add New Student</h3>
        <form>
          <p>First Name</p>
          <input type="text"/>
          <p>Last Name</p>
          <input type="text"/>
          <p>Email</p>
          <input type="text"/>
        </form>
      </div>
    )
  }
};
