import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  useRouteMatch,
  useParams
} from "react-router-dom"
// import {Navbar, Nav} from 'react-bootstrap';
import './App.css';
import Logo from "./logo.jpg";

export default function AuthExample() {
  return (
    <Router>
      <div>
      <ul>
        <li><Link to = "/public">Home</Link></li>
        <li><Link to = "/topics">Kategori</Link></li>
        <li><Link to = "/private">Keranjang</Link></li>
        <li style={{position: 'absolute', right: 0}}><a class="active" href="#about"><AuthButton /></a></li>
      </ul>

        <Switch>
          <Route path = "/public">
            <PublicPage />
          </Route>
          <Route path = "/login">
            <LoginPage />
          </Route>
          <PrivateRoute path = "/private">
            <ProtectedPage />
          </PrivateRoute>
          <Route path = "/topics">
            <Topics />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Topics(){
  let { path, url } = useRouteMatch();
  return(
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/Sate, Nasi Goreng`}>Elektronik</Link>
        </li>
        <li>
          <Link to={`${url}/Wisata alam, Museum`}>Otomotif</Link>
        </li>
        <li>
          <Link to={`${url}/Ibis, JW Marriot`}>Fashion</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic/>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {  
  let {topicId} = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  )
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick = {() => {
          fakeAuth.signout(() => history.push("/public"));
        }}
      >
        Sign Out        
      </button>
    </p>
  ) : (
    <p>You Are Not Logged In.</p>
  );
}

function PrivateRoute({ children, ...rest }) { 
  return (
    <Route
      {...rest}
      render = {({ location }) => 
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to = {{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function PublicPage() {  
  return <h3>Public</h3>;
}

function ProtectedPage() {  
  return<img src={Logo}></img>
  
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You Must Log In</p>
      <button onClick = {login}>Log In</button>
    </div>
  );
}