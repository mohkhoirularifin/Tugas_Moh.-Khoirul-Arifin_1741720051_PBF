import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux' 
import MainReducer from './reducers/mainReducer'
import App from './App';
import Table from './containers/table'
import CreateTodo from './containers/createTodo'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

// import registerServiceWorker from './registerServiceWorker';
import * as serviceWorker from './serviceWorker';


const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => 
f)(createStore)(MainReducer)

ReactDOM.render(<Provider store={store}> 
    <CreateTodo/>
    <Table/>
</Provider>
, document.getElementById('root')); 
// registerServiceWorker();
serviceWorker.unregister();