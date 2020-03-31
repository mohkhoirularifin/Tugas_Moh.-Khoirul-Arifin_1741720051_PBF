import React from 'react';
import logo from './logo.svg';
import './App.css';
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

export default function AuthExample() {
  return (
    <Router>
      <div>
        <ul>
        <li><Link to = "/public">Home</Link></li>
          <li><Link to = "/topics">Kategori</Link></li>
          <li><Link to = "/private">Keranjang</Link></li>
          <li style={{position: 'absolute', right: 0}}><a class="active" href="#about"></a></li>
        </ul>
      </div>
    </Router>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
