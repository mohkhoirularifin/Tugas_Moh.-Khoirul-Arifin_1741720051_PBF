import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './IMG_6282bw.jpg';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Navbar = () => {
    return <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
    </div>
  </nav>
}

const Body = () => {
    return(
        // <div class = "container">
        //     <div class = "text" >
        //         <center><h1>BIODATA</h1></center>
        //     </div>
        // </div>
        <div class = "row">
            <div class = "col-5">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div class = "col-1">
                <p>Nama     :</p>
            </div>
            <div class = "col-6">
                <p>Moh. Khoirul</p>
            </div>
        </div>
    )
}

ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<Body />, document.getElementById('body'));
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
