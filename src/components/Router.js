import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App.js";
import Recipe from "./Recipe";

const Router = () => {
  console.log(process.env.PUBLIC_URL);
  console.log("brwseroter", `${process.env.PUBLIC_URL}/`);
  console.log(`${process.env.PUBLIC_URL}/recipe/:id`);
  return (
    <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
      <Switch>
        {/* <Route exact path={`/`} component={App} /> */}
        {/* <Route exact path={`${process.env.PUBLIC_URL}/`} component={App} /> */}
        <Route
          exact
          path={`/`}
          render={routerProps => <App routerProps={routerProps} />}
        />

        <Route
          exact
          path={`/recipe/:id`}
          render={routerProps => <Recipe routerProps={routerProps} />}
        />

        {/* <Route
          path={`${process.env.PUBLIC_URL}/recipe/:id`}
          component={Recipe}
        /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
