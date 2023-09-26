import React from "react";
import PropTypes from "prop-types";

function UserForm(props) {
  return (
    <div className="user-form">
      <input type="text" onChange={props.handleInputChange} autoFocus />
      <button onClick={props.handleButtonClick}>Dohvati podatke</button>
    </div>
  );
}

UserForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};

export default UserForm;
