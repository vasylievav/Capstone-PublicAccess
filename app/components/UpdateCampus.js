import React from "react";
//import { connect } from "react-redux";

export default class UpdateCampus extends React.Component {
  render() {
    return (
      <div className="update-campus-form">
      <h3>Update Campus Information</h3>
      <form >
        <p>New Name</p>
        <input id ="nameInput" type="text" />
        <p>New Adress</p>
        <input type="text"/>
        <button type="submit">Submit</button>
      </form>
    </div>
    )
  }
};

