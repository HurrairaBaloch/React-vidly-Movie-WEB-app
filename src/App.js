import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./component/movies";
import MovieForm from "./component/movieForm";
import Customers from "./component/customers";
import Rentals from "./component/rental";
import NotFound from "./component/notFound";
import NavBar from "./component/navBar";
import LoginForm from "./component/loginForm";
import RegisterForm from "./component/registerForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/loginForm" component={LoginForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
