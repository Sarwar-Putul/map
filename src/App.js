import logo from './logo.svg';
import './App.css';
import Map from './Componants/Map/Map';
import Direction from './Componants/Direction/Direction';
import PlaceSearch from './Componants/PlaceSearch/PlaceSearch';

function App() {
  return (
    <div className="App">
      <Map></Map>
      <PlaceSearch></PlaceSearch>
      <Direction></Direction>
      
    </div>
  );
}

export default App;
