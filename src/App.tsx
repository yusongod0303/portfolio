import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Portfolio } from "./pages"; // 중괄호 {} 필요
import "@/global.less"; // 글로벌 스타일 적용

const App: React.FC = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Portfolio} />
      </Switch>
    </Router>
  );
};

export default App;
