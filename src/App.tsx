import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { LoginPage } from './views/login/login'
import { BookListPage } from './views/book-list/book-list'

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/shelf" component={BookListPage} />
          <Redirect to="/shelf" />
        </Switch>
      </Router>
    </div>
  )
}

export default App;