import './App.css';
import DisplayClock from './components/display-clock/display-clock';
import DisplayDate from './components/display-date/display-date';
import ToggleDisplay from './components/toggle-display/toggle-display';

function App() {
  return (
    <div className="App">
      <h1>Exo 06 - Horloge</h1>

      <ToggleDisplay
        ComponentA={() => <DisplayClock />}
        ComponentB={DisplayDate} />
    </div>
  );
}

export default App;
