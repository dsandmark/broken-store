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
import PageNotFound from './views/page-not-found/page-not-found.component'

import Conclusion from './views/1-conclusion/component'
import FirstOverview from './views/2-first-overview/component'
import FirstRecap from './views/3-first-recap/component'
import ReactReduxConnection from './views/4-react-redux-connection/component'
import ReduxUnidirectionalFlow from './views/5-redux-unidirectional-flow/component'
import Switches from './views/6-switches/component'
import Performance from './views/7-performance/component'
import ReusableComponents from './views/8-reusable-components/component'
import FinalRecap from './views/9-final-recap/component'
import Thanks from './views/10-thanks/component'

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
        <Route path='conclusion' component={Conclusion}/>
        <Route path='first-overview' component={FirstOverview}/>
        <Route path='first-recap' component={FirstRecap}/>
        <Route path='react-redux-connection' component={ReactReduxConnection}/>
        <Route path='redux-unidirectional-flow' component={ReduxUnidirectionalFlow}/>
        <Route path='switches' component={Switches}/>
        <Route path='performance' component={Performance}/>
        <Route path='reusable-components' component={ReusableComponents}/>
        <Route path='final-recap' component={FinalRecap}/>
        <Route path='thanks' component={Thanks}/>
      </Route>
      <Route path="*" component={PageNotFound} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
