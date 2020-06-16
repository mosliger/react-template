import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routers from './Routers';


const App = () => (
  <Router>
    <div className="wrap-page">
      <Routers />
    </div>
  </Router>
);

export default App;
