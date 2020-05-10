import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import DetailProduk from './component/DetailProduk';
import Keranjang from './component/Keranjang';
import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import ProtectedRoute from "./component/ProtectedRoute";
import ListProduk from "./component/ListProduk";
import Login from "./component/Login";

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/detail" component={DetailProduk} isAuthenticated={isAuthenticated} isVerifying={isVerifying} />
        <ProtectedRoute path="/keranjang" component={Keranjang} isAuthenticated={isAuthenticated} isVerifying={isVerifying}/>
        <ProtectedRoute path="/" component={ListProduk} isAuthenticated={isAuthenticated} isVerifying={isVerifying}/>
        <ProtectedRoute
          exact
          path="/"
          component={ListProduk}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />
      </Switch>
    </React.Fragment>
  );
}
function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}
export default connect(mapStateToProps)(App);

