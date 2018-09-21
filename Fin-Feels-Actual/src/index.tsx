import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import ProfileA from './ProfileA';
import ProfileB from './ProfileB';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
   <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/profileA/:name/:images/:image/:location/:description/:emotion" component={ProfileA} />
      <Route exact path="/profileB" component={ProfileB} />
    </div>
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
