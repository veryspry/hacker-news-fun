import React from "react";
import { Route } from "react-router-dom";
import logo from "./logo.svg";

const Routes = props => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        component={() => (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        )}
      />
      <Route exact path="/stories" component={() => <div>hey</div>} />
    </React.Fragment>
  );
};

export default Routes;
