import React from "react";
import "./App.css";
import "./components/card-list/card-list.components";
import { CardList } from "./components/card-list/card-list.components";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ users: users }))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CardList name="Yenaring"/>
          {this.state.users.map((user) => (
            <h1 key={user.id}>{user.name}</h1>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
