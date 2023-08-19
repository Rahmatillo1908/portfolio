import './App.css';
import Home from './components/Home/Home';
import Navbar from "./components/Navbar/Navbar"
import Partner from './components/Partner/Partner';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Partner/>
    </div>
  );
}

export default App;
