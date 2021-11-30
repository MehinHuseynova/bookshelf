import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProductsPage } from './views/products/products';

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={ProductsPage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;