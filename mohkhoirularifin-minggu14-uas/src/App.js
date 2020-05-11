import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import DetailProduk from './component/DetailProduk';
import Keranjang from './component/Keranjang';
import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import ProtectedRoute from "./component/ProtectedRoute";
import ListProduks from "./component/ListProduks";
import Kritik from "./component/Kritik";
import Login from "./component/Login";
import InfoCovid19 from "./component/InfoCovid19";


function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/detail" component={DetailProduk} isAuthenticated={isAuthenticated} isVerifying={isVerifying} />
        <Route path="/infocovid19" component={InfoCovid19} />
        <ProtectedRoute path="/keranjang" component={Keranjang} isAuthenticated={isAuthenticated} isVerifying={isVerifying}/>
        <ProtectedRoute path="/kritik" component={Kritik} isAuthenticated={isAuthenticated} isVerifying={isVerifying}/>
        <Route path="/" component={ListProduks} isAuthenticated={isAuthenticated} isVerifying={isVerifying}/>
        <ProtectedRoute
          exact
          path="/"
          component={ListProduks}
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

