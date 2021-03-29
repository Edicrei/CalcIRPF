import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'proxy-polyfill/proxy.min.js';

import React from 'react';
import ReactDOM from 'react-dom';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import PersonContextProvider from './contexts/PersonContextProvider';

import reportWebVitals from './reportWebVitals';

import './index.css';

function render() {
  const IrpfApp = lazy(() => import('./apps/IrpfApp'));


  ReactDOM.render(
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/irpf">Irpf App</Link>
          </li>
        </ul>
      </div>
      <br />
      <Switch>
        <Route path="/irpf">
          <Suspense fallback={<span>loading irpf app...</span>}>
            <PersonContextProvider>
              <IrpfApp />
            </PersonContextProvider>
          </Suspense>
        </Route>
      </Switch>
    </Router>
    ,
    document.getElementById('root')
  );
}

render();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
