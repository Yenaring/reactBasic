import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from './components/search-box/search-box.component.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ users: users }))
      .catch((error) => console.log(error));
  }

  render() {

    const { users, searchField } = this.state;
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchField.toLowerCase()));


    return (
      <div className="App">
        <header className="App-header">
          <SearchBox
            placeholder="search users"
            handleChange={(e) => this.setState({ searchField: e.target.value })}
          />
          <CardList users={filteredUsers} />
        </header>
      </div>
    );
  }
}

export default App;
