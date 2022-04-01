import './App.css';
import data from './Data/albums';
import Cards from './Component/Card';
import Search from './Component/Search';
import Cards from './Component/Card'; import List from './Component/List'; import Search from './Component/Search';
import Auth from './Page/auth';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import List from './Component/List';
import Col from 'react-bootstrap/Col'; import Row from 'react-bootstrap/Row';
import {useState, useEfect} from 'react' ;
import  axios from 'axios';


function App() {

  [accToken, setAccToken] = useState();
  [accesSrcKey, setAccToken] = useState();
  [accesTrack, setAccTrack] = useState();
  [isAuth, setAuth] = useState(false);

  useEfect(() => {
    if(window.location.hash) {
      const {access_token} = getParamsFromUrl(window.location.hash)
      setAccToken(access_token)
    }
    if (access_token) {
      setAuthenticaed(true)
    }
  }, [access_token])


function App() {
  return (
    <div className="App">
      <Auth />
@@ -44,3 +58,4 @@ function App() {
}

export default App;
