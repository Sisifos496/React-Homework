import './App.css';
import logo from './Beşiktaş.png'
import necip from './necip.gif'
import bjkmatch from './bjk-brugge.png'
import abubaker from './Abubaker.jpeg'

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <img src={abubaker} className='abubaker-photo'></img>
        <p>Beşiktaş</p>
        <img src={logo} className='besiktas-logo'></img>
      </div>
      <div className='body'>
        <div className='best-player'>
          <p>Best Player:</p>
          <img src={necip} className='necip-gif'></img>
        </div>
        <div className='best-match'>
          <p>Best Match:</p>
          <img src={bjkmatch} className='bjk-match'></img>
        </div>
      </div>
      <div className='foot'>
        <p>ᵇᵉˢⁱᵏᵗᵃˢ<h1>IS SMALL</h1></p>
      </div>
    </div>
  );
}

export default App;
