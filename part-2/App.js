// import './App.css';
import Tweet from './Components/Tweet';

function App() {
  return (
    <div className="App container">
        <Tweet username="cassandra_codes" name="Cassandra R." 
            date={new Date().toDateString()} message="Ever since Halloween I can't stop eating chocolate" />
        <Tweet username="scarlettTheCat" name="Scarlett R." 
            date={new Date().toDateString()} message="Meow" />
        <Tweet username="rosie_posie" name="Rosie R." 
            date={new Date().toDateString()} message="Hi, Dad!!!" />
    </div>
  );
}

export default App;