import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import ListProduk from './component/ListProduk';
import DetailProduk from './component/DetailProduk';
import Keranjang from './component/Keranjang';

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/detail" component={DetailProduk}/>
          <Route path="/keranjang" component={Keranjang}/>
          <Route path="/" component={ListProduk}/>
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;
