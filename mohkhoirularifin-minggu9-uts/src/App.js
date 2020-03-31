import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  useRouteMatch
} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "./header.jpg";
import './App.css';
import News from './News/News';

export default function AuthExample() {
  return (
    <Router>
      <div>
      <ul>
        <li><Link to = "/public">Home</Link></li>
        <li><Link to = "/topics">Kategori</Link></li>
        <li><Link to = "/private">Berita Kesehatan terkini</Link></li>
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
            <Category />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Category(){
  let { path, url } = useRouteMatch();
  return(
    <div>
      <h2>Category</h2>
      <ul>
        <li>
          <Link to={`${url}/Albanjari`}>Al Banjari</Link>
        </li>
        <li>
          <Link to={`${url}/Alhabsyi`}>Al Habsyi</Link>
        </li>
        <li>
          <Link to={`${url}/Gambus`}>Gambus</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select.</h3>
        </Route>
        <Route path={`${url}/Albanjari`} component={Albanjari}/>
        <Route path={`${url}/Alhabsyi`} component={Alhabsyi}/>
        <Route path={`${url}/Gambus`} component={Gambus}/>
      </Switch>
    </div>
  );
}

function Albanjari() {  
  return(
    <div class="videos-grid">
      <div class="videos-grid-video">
        <h5 id="videos-grid">
          Muhasabatul Qolbi [ Terbaik 1 ] - FesBan The best master 2019
        </h5>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/advNyPPnBno" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div class="videos-grid-video">
        <h5 id="videos-grid">
          Syauqul Habib (Robbi Kholaq) - FesBan The Best Master 2017
        </h5>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/7UrnkYUCEiE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div class="videos-grid-video">
        <h5 id="videos-grid">
          Ya Sayyidassadat - Syauqul Habib Harmoni Sholawat Alhihu | voc. Makhrus
        </h5>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ThJH5HrTiFk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div class="videos-grid-video">
        <h5 id="videos-grid">
          Syauqul Habib (Antudkhilana) - FesBan The Best Master 2017
        </h5>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/AlPz59pH0kI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div class="videos-grid-video">
        <h5 id="videos-grid">
          ALAMAAK / KARYA BUDAYA (TERBAIK 1) || GRAND FINAL FesBan Jawa Pos 2019
        </h5>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Ii9Hhzzrcdg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div class="videos-grid-video">
        <h5 id="videos-grid">
          Sukarol munsyid - juara 1 Fesban Milad Ashwatul Fuad pujon
        </h5>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/VUa3EDFuHeE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    </div>
  );
}

function Alhabsyi() {  
  return(
    <div class="videos-grid">
      <div class="videos-grid-video">
        <h5 id="videos-grid">
          Berkah istighfar Corona Minggat - Ahkam Syubbanul Muslimin HD
        </h5>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/DnDPjXEa6Hw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div class="videos-grid-video">
        <h5 id="videos-grid">
          "NEW" KARTONYONO MEDOT JANJI versi SHOLAWAT | SYUBBANUL MUSLIMIN. HD
        </h5>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/4iIknKif36M" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div class="videos-grid-video">
        <h5 id="videos-grid">
          MAN ANA - HADRAH AHBAABUL MUSTHOFA LAMONGAN - RANTAU PAPUA - PILANG - LAMONGAN BERSHOLAWAT
        </h5>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Ap2qOWcHCc4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div class="videos-grid-video">
        <h5 id="videos-grid">
          SA'DUNA FIDDUNYA - LIVE PONPES DARUL ULUM JOMBANG BERSHOLAWAT
        </h5>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/R-FaMnksnCY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div class="videos-grid-video">
        <h5 id="videos-grid">
          Sa'duna Fiddunya Versi Majlis Riyadlul Jannah ♦ Qasidah Kesukaan Almaghfurllah KH.Maimoen Zubair
        </h5>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/mdlRvssSTZw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div class="videos-grid-video">
        <h5 id="videos-grid">
          NEW !!! Man Ana Cover by Majlis Riyadlul Jannah
        </h5>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/UTte9RH_BjU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    </div>
  );
}

function Gambus() {  
  return(
    <div class="videos-grid">
      <div class="videos-grid-video">
        <h5 id="videos-grid">
          Gambus Balasyik Jember Live Bondowoso Terbaru 2019
        </h5>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/LJaX1nE4Cxk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div class="videos-grid-video">
        <h5 id="videos-grid">
          Lagu bikin Hati Adem | Jalsah BALASYIK JEMBER Live Kanzus Sholawat Hb. Luthfi Bin Yahya Pekalongan
        </h5>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6wM5-6quz6Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div class="videos-grid-video">
        <h5 id="videos-grid">
          SABYAN - AISYAH ISTRI RASULULLAH | COVER
        </h5>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/aN0ZnoRg_IY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div class="videos-grid-video">
        <h5 id="videos-grid">
          DEEN ASSALAM - Cover by SABYAN
        </h5>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/1OMD_LSELAM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div class="videos-grid-video">
        <h5 id="videos-grid">
          "MEWAAAH" Simak sampe habis | BALASYIK JALSAH Live PP. Baitul Muhklasin Malang Terbaru 2019
        </h5>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ipGW9SHA4Bg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div class="videos-grid-video">
        <h5 id="videos-grid">
          YA MAULANA - SABYAN
        </h5>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Ii1jvubIC8g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    </div>
  );
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
  return(
    <div>
      <img src={Logo} width="100%"></img>
      <br/>
      <br></br>
      <div className="api-grid">
        <News/>
      </div>
    </div>  
  );
  
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
      <h1>Anda harus Login Sebelum Membuka Berita</h1>
      <button onClick = {login}>Log In</button>
    </div>
  );
}