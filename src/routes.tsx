import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// PAGES
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Jobs from "./pages/Jobs";
import Tecnologies from "./pages/Tecnologies";
// COMPONENTS
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const Routes = () => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <BrowserRouter>
      <Header setShowOptions={(v) => setShowOptions(v)} />
      <Sidebar showOptions={showOptions} setShowOptions={(v) => setShowOptions(v)} />
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
