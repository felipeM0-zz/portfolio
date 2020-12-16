// import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// PAGES
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Jobs from "./pages/Jobs";
import Tecnologies from "./pages/Tecnologies";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/jobs" exact component={Jobs} />
        <Route path="/tecnologies" exact component={Tecnologies} />
        <Route path="/contacts" exact component={Contacts} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
