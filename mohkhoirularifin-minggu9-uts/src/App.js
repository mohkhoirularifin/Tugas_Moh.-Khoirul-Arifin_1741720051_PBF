import React from 'react';
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
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "./header.jpg";
import './App.css';

export default function AuthExample() {
  return (
    <Router>
      <div>
      <ul>
        <li><Link to = "/public">Home</Link></li>
        <li><Link to = "/topics">Kategori</Link></li>
        <li><Link to = "/private">Keranjang</Link></li>
        <li style={{position: 'absolute', right: 0}}><a className="active" href="#about"><AuthButton /></a></li>
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
      <h2>Kumpulan Video Sholawat</h2>
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
  return (
  <div >
    <div className="nine columns">
      <div className="ec_post ec_block">
        <div >
          <h3 className="bebas" >اَللَّهُمَّ صَلِّ عَلٰى سَيِّدِنَا مُحَمَّدٍ وَعَلٰى اٰلِ سَيِّدِنَا مُحَمَّدٍ</h3>
          <h4 className="bebas seven">Ya Allah berikanlah rahmat kepada junjungan kita Nabi Muhammad dan atas keluarga junjungan kita Nabi Muhammad.</h4>
          <hr />
          <img src={Logo} width="100%"></img>
          <hr /> 
          <div >
            <p className="six column">
              <strong> Aliquam condimentum diam vitae magna</strong>
              <br></br>
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;Nabi Muhammad SAW merupakan utusan Allah SWT dan beliau sangatlah peduli, sayang, dan mencintai umatnya. 
              Maka tatkala sebagai umat muslim haruslah dapat mengamalkan Sholawat Nabi sebagai wujud cinta kepada Allah SWT dan Nabi Muhammad SAW. 
              Sholawat juga sebagai bentuk ibadah kepada Allah SWT dn terdapat berbagai keistimewaan yang luar biasa bagi yang rutin mengamalkannya. 
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;Menjadikan Sholawat Nabi sebagai amalan sehari-hari akan mengubah kehidupanmu menjadi lebih berkah dan dimudahkan urusannya. 
              Sebelum kita mengamalkannya alangkah baiknya kita mengetahui seluk beluk dari Sholawat Nabi. 
              Yuk mari kita hayati Sholawat Nabi dan senantiasa megamalkan untuk mencapai Ridho dan Rahmat Allah SWT.
							<br></br>
            </p>
            <div className="youtube">
              <div className="flex-video widescreen ">
              <iframe width="420" height="315" src="https://www.youtube.com/embed/3v6XXK3i7Ig" frameborder="0" allowfullscreen></iframe>
              </div>
              <p>
                <span className=" label orange">&nbsp;&nbsp;&nbsp;&nbsp; Annabi Shollu Alaih - Majelis Jamu Legi</span>
                <hr></hr>
                <em>&nbsp;&nbsp;&nbsp;&nbsp;Shalawat Ini dinyanyikan oleh sebuah group banjari Al-Habsy Jamu Legi asal Kabupaten Nganjuk Jawa Timur. 
                  Ini adalah salah satu dari sekian banyak Sholawat yang ada di Dunia. Kita tidak perlu bingung bagaimana kita akan menyayangi Nabi Muhammad, 
                  maka dengan bersholawat rasa kasih sayang yang anda rasakan akan tersampaikan kepada Nabi Muhammad SAW. </em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

function ProtectedPage() {  
  return<img src={Logo} width="100%"></img>
  
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