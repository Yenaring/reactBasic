import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

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
          <CardList users={this.state.users} />
        </header>
      </div>
    );
  }
}

export default App;
