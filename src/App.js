import './App.css';
import data from './Data/albums';
import Cards from './Component/Card';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import List from './Component/List';


function App() {
  return (
    <div className="App">
      <div className="content">
      <button>Login</button> <hr/>
        <h2>Playlist</h2>
            {data.map((d)=>{
            return(
              <Cards image={d.album.images[0].url} title={d.album.name} artis={d.album.artists[0].name}/>    
            )
          })}
      </div>
      <div className="sidebar">
        <h3>Popular</h3>
            {data
            .filter(d => d.popularity >= 70)
            .map((d)=>{
            return(
              <List  imgList={d.album.images[2].url} nameList = {d.album.name}/>
            )
          })}
      </div>


      <button>Login</button>

      <Container>
      <Row>
        <Col xs={12} md={8}>
        <h2>Playlist</h2>
          {data.map((d)=>{
          return(
            <Cards image={d.album.images[0].url} title={d.album.name} artis={d.album.artists[0].name}/>    
          )
        })}
        </Col>
        <Col xs={6} md={4}>
          <h3>Popular</h3>
          {data
          .filter(d => d.popularity >= 70)
          .map((d)=>{
          return(
            <List  imgList={d.album.images[2].url} nameList = {d.album.name}/>
          )
        })}
        </Col>
      </Row>
      </Container>
    </div>
  );
}
export default App;