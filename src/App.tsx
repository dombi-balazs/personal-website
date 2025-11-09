import "./App.css";
import Welcome from "./components/Welcome";
import AboutMe from "./components/AboutMe";
import Studies from "./components/Studies";
import Profiles from "./components/Profiles";
import Menu from "./components/Menu"

function App() {
  return (
    <div className="div-container">
      
        <Welcome />
      <Menu />
      <AboutMe />
      <Studies />
      <Profiles />
    </div>
  );
}

export default App;
