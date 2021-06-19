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

  filter = (e) => {
    let sortList = this.state.users;
    let toggle = this.state.toggle;
    if (e.target.value) {
      sortList = sortList.filter((user) =>
        user.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      this.setState({ search: e.target.value });
    } else {
      sortList = sortList.reverse();
      toggle === "dn"
        ? this.setState({ toggle: up })
        : this.setState({ toggle: "dn " });
    }
    this.setState({ sortList: sortList });
  };

  render() {
    const { users, sortList, toggle, search } = this.state;
    return (
      <div>
        <Navbar filter={this.filter} />
        <main>
          <Directory
            filter={this.filter}
            users={users}
            sortList={sortList}
            toggle={toggle}
            search={search}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
