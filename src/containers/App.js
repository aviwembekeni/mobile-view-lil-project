import React, { Component } from "react";
import "./App.css";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import { users } from "../users";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users,
      searchField: ""
    };
  }

  onSearchChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { searchField, users } = this.state;
    console.log(searchField);

    const filteredUsers = users.filter(user => {
      return user.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="">
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList users={filteredUsers} />
        </Scroll>
      </div>
    );
  }
}

export default App;
