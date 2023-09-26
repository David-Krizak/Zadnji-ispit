import React from "react";
import PropTypes from "prop-types";

function UserDetails(props) {
  return (
    <div className="user-details">
      <img src={props.user.avatar_url} alt="User Avatar" />
      <h2>{props.user.name}</h2>
      <p>{props.user.location}</p>
      <p>{props.user.bio}</p>
      <ul className="repos-list">
        {props.repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      <button onClick={props.handleReset}>Reset</button>
    </div>
  );
}

UserDetails.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
    bio: PropTypes.string,
  }).isRequired,
  repos: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default UserDetails;
