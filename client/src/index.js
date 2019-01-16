import React from 'react';
import ReactDOM from 'react-dom';
//import 'materialize-css/dist/css/materialize.min.css';
import { unregister } from './registerServiceWorker';
import { Provider } from 'react-redux';
import App from './components/App';
import './CSS/StyleSheet1.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './reduxStore/configureStore';
import axios from 'axios';
window.axios = axios;

const store = configureStore();

unregister();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));

if(module.hot) {
    module.hot.accept();
}

console.log('Environment is', process.env.NODE_ENV);

console.log(store);
