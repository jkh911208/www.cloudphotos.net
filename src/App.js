import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Support from "./components/pages/Support";
import Privacy from "./components/pages/Privacy";

import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/support" component={Support} />
          <Route exact path="/privacy" component={Privacy} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
