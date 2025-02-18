import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Portfolio } from "./pages";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Portfolio} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
