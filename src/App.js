import './App.css';
import Navigationbar from './components/Navigationbar/Navigationbar';
import HomeComponent from './components/HomeComponent/HomeComponent';
import AboutComponent from './components/AboutComponent/AboutComponent';
import Projects from './components/Projects/Projects';
import ContactInfo from './components/ContactInfo/ContactInfo';

function App() {
  return (
    <div className="App">
      <div id='navbar_main'>
        <Navigationbar />
      </div>
      <HomeComponent />
      <AboutComponent />
      <Projects />
      <ContactInfo />
    </div>
  );
}

export default App;