import './App.css';
import Navbar from './components/Navbar';
import CartWidget from './components/Cart/index.jsx';
import ItemHome from './components/ItemList/index';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar/>
      <ItemHome/>
    </div>
  );
}

export default App;
