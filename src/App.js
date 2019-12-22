import React, { Fragment, Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home";
import BusinessPage from "./pages/BusinessPage";
import NavBar from "./components/NavBar";
import Signin from "./pages/Signin/index";
import "./App.scss";

class App extends Component {
  render(props) {
    return (
      <Fragment>
        <NavBar setLang={this.props.setLang} />
        <Switch className="App">
          <Route path="/business/:id" component={BusinessPage} />
          <Route path="/signin" component={Signin} />
          <Route exact path="/" render={props => <HomePage {...props} />} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
