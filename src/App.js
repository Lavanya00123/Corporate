import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
import AppServices from './components/services';
import Appworks from './components/works';
import AppTeam from './components/teams';

function App() {
  return (
    <div className="App">
<header id = "header">
  <AppHeader/>
</header>
<main>
  <AppHero/>
  <AppAbout/>
  <AppServices/>
  <Appworks/>
  <AppTeam/>
</main>

    </div>
  );
}

export default App;
