import React from "react";
import API from "./utils/API";
import Navbar from "./components/Navbar";
import Directory from "./components/Directory";
import Footer from "./components/Footer";
import "./App.css";

class App extends React.Component {
  state = { users: [], sortList: [], toggle: "dn", search: "" };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API.getUsers()
      .then((res) => this.setState({ users: res }))
      .catch((err) => console.log(err));
  };
}

export default App;
