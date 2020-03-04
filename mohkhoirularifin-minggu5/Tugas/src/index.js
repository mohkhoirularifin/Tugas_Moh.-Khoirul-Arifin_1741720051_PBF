import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import HelloComponent from './component/HelloComponent';
// import StatefullComponent from './container/StateFullComponent';
// import FormLogin from './Login/FormLogin';
import BlogPost from "./container/BlogPost/BlogPost";

// function HelloWorld ()
// {
//     return <p> Ini Adalah Function Component </p>
// }

// const HelloWorld = () => {
//     return <p> Ini adalah Arrow Function </p>
// }

// class StatefullComponent extends React.Component
// {
//     render() {
//         return <p> Ini Adalah Statefull Component </p>
//     }
// }
// ReactDOM.render(<FormLogin />, document.getElementById('root'));
ReactDOM.render(<BlogPost />, document.getElementById('content'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
