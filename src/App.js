import './App.css';
import data from './Data/albums';
import Cards from './Component/Card'; import List from './Component/List'; import Search from './Component/Search';
import Auth from './Page/auth';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col'; import Row from 'react-bootstrap/Row';
import {useState, useEfect} from 'react' ;
import  axios from 'axios';
// import  axios from 'axios';


function App() {

  [accToken, setAccToken] = useState();
  [accesSrcKey, setAccToken] = useState();
  [accesTrack, setAccTrack] = useState();
@@ -28,13 +27,15 @@ function App() {

  return (
    <div className="App">
      <Auth />

      <Container>

      <Search />
      <Row>
        <Col xs={12} md={8}>
        <h2>Playlist</h2>
        <Auth />

          {data.map((d)=>{
          return(
            <Cards image={d.album.images[0].url} title={d.album.name} artis={d.album.artists[0].name}/>    
@@ -51,6 +52,7 @@ function App() {
          )
        })}
        </Col>

      </Row>
      </Container>
    </div>