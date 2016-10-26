import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import rootReducer from './domain'
import './index.css';

import App from './views/app/app.component';
import Welcome from './views/welcome/welcome.component'
import Flow from './views/flow/flow.container'
import Switches from './views/switches/switches.component'
import PageNotFound from './views/page-not-found/page-not-found.component'

const logger = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(logger)
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Welcome} />
        <Route path='flow' component={Flow}/>
        <Route path='switches' component={Switches}/>
      </Route>
      <Route path="*" component={PageNotFound} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
