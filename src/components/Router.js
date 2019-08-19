import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import App from "../App.js";
import Recipe from "./Recipe";

const Router = () => {
  console.log(process.env.PUBLIC_URL);
  console.log("yoo", `${process.env.PUBLIC_URL}/`);
  console.log(`${process.env.PUBLIC_URL}/recipe/:id`);
  return (
    <HashRouter basename='/'>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={App} />
        <Route
          path={`${process.env.PUBLIC_URL}/recipe/:id`}
          component={Recipe}
        />
      </Switch>
    </HashRouter>
  );
};

export default Router;
