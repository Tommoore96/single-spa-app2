import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";
import Users from "./Users";

export default function Root(props) {
  return (
    <Router>
      <div className="business-aviation">
        <h1>Business aviation with routing</h1>

        <ul>
          <li>
            <Link to="/business-aviation/">Home</Link>
          </li>
          <li>
            <Link to="/business-aviation/users">Users</Link>
          </li>
        </ul>
        <Route
          exact
          path="/business-aviation/"
          render={() => <h2>Business aviation home</h2>}
        />
        <Route exact path="/business-aviation/users" render={() => <Users />} />
        <a href="http://localhost:3000/">Back to in2plane</a>
        <hr />
      </div>
    </Router>
  );
}
