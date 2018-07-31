import React from 'react';
import ReactDOM from 'react-dom';
//import 'materialize-css/dist/css/materialize.min.css';
import reduxThunk from 'redux-thunk';
import registerServiceWorker, { unregister } from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import reducers from './reducers';
import './CSS/StyleSheet1.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

unregister();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));

console.log('Environment is', process.env.NODE_ENV);
