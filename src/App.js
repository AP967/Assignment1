import React from "react";
import "./styles.css";
import Menu from "./components/MenuComponents";
import { DISHES } from "./shared/dishes";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return <Menu dishes={this.state.dishes} />;
  }
}

export default App;
