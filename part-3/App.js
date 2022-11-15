// import './App.css';
import Tweet from './Components/Person';

function App() {
  return (
    <div className="App container">
        <Person age={26} name="Cassandra R." 
            hobbies={['Baking', 'Crafting', 'French Horn']} />
        <Person age={3} name="Scarlett R." 
            hobbies={['nap', 'get pets']} />
        <Person age={27} name="Ross R." 
            hobbies={['Watch YouTube', 'Golf', 'Hockey']} />
    </div>
  );
}

export default App;