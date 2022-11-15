import './App.css';
import FirstComponent from './Components/FirstComponent';
import NamedComponent from './Components/NamedComponent';

function App() {
  return (
    <div className="App container">
      <FirstComponent />
      <NamedComponent name="Cassandra"/>
    </div>
  );
}

export default App;