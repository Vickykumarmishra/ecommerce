
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Timer from './components/Timer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Timer/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
