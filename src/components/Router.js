import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App.js";
import Recipe from "./Recipe";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={App} />
        <Route
          path={`${process.env.PUBLIC_URL}/recipe/:id`}
          component={Recipe}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
