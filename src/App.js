import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Support from "./components/pages/Support";
import Privacy from "./components/pages/Privacy";

import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/support"}
            component={Support}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/privacy"}
            component={Privacy}
          />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
