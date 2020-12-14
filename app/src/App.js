import logo from './logo.svg';
import './App.css';
import myimg from './myimg.png';


function App() {
  return (
    <div className="App">
         <div className="App-header" style={{border:"solid 1px black", maxWidth:"100vw"}}>
      <h1 className="title red">This is React</h1>
      <br/>
      <img src={myimg} />
      <br/>
      <h1 className="title red">These are the most known sites created by react</h1>
      <img className="image" src={"/imageInPublic.png"} />
      </div>
      <h1 className="title red"> Introduction video to what is React </h1>
    <video width="320" height="240" controls>
     <source src="/whatIsReact.mp4" type="video/mp4"/> >
     </video>
    </div>
  );
}

export default App;
