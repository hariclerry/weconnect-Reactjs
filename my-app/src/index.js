import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'react-notifications/lib/notifications.css';
import fectInterceptor from  './actions/interceptor';



// render a React element(app component) into a root DOM node
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

fectInterceptor();
