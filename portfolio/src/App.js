import './App.css';
import Navigationbar from './components/Navigationbar/Navigationbar';
import HomeComponent from './components/HomeComponent/HomeComponent';
import AboutComponent from './components/AboutComponent/AboutComponent';

function App() {
  return (
    <div className="App">
      <div id='navbar_main'>
      <Navigationbar />
      </div>
      <HomeComponent />
      <AboutComponent />
    </div>
  );
}

export default App;