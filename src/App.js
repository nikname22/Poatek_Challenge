import FirstChallenge from './Components/FirstChallenge';
import SecondChallenge from './Components/SecondChallenge'
import ThirdChallenge from './Components/ThirdChallenge'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='title'>Primeiro Desafio</div>
      <FirstChallenge />
      <SecondChallenge />
      <ThirdChallenge />
    </div>
  );
}

export default App;