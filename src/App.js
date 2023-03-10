
import './App.css';
import Flex from './components/Flex';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <NavBar/>
        <ItemListContainer lista="LISTA DE ITEMS"/>


      </header>
    </div>
  );
}

export default App;
