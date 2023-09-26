// App.jsx
import React from "react";
import UserForm from "./UserForm";
import UserDetails from "./UserDetails";
import "./styles.css";

class App extends React.Component {
  state = {
    username: "",
    user: null,
    repos: [],
    error: null,
  };

  handleInputChange = (e) => {
    this.setState({ username: e.target.value });
  };
  handleButtonClick = async () => {
    if (!this.state.username.trim()) {
      alert("Unesite korisničko ime za pretragu!");
      return;
    }

    try {
      const userResponse = await fetch(
        `https://api.github.com/users/${this.state.username}`
      );
      if (!userResponse.ok) {
        throw new Error("Korisničko ime ne postoji zasad...");
      }
      const user = await userResponse.json();

      const reposResponse = await fetch(
        `https://api.github.com/users/${this.state.username}/repos`
      );
      const repos = await reposResponse.json();

      this.setState({ user, repos, error: null });
    } catch (error) {
      alert(error.message);
      this.setState({ error: null, user: null, repos: [] });
    }
  };

  handleReset = () => {
    this.setState({ username: "", user: null, repos: [] });
  };

  render() {
    return (
      <div className="GlavniDiv">
        {!this.state.user ? (
          <>
            <UserForm
              handleInputChange={this.handleInputChange}
              handleButtonClick={this.handleButtonClick}
              inputValue={this.state.username}
            />
            {this.state.error && <p className="error">{this.state.error}</p>}
          </>
        ) : (
          <UserDetails
            user={this.state.user}
            repos={this.state.repos}
            handleReset={this.handleReset}
          />
        )}
      </div>
    );
  }
}
export default App;
