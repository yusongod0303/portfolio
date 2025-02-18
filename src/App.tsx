import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Portfolio } from './pages';
import '@/global.less';

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Portfolio} />
      </Router>
    </div>
  );
};

export default App;