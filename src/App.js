import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/header';
import AppHero from './components/hero';

function App() {
  return (
    <div className="App">
<header id = "header">
  <AppHeader/>
</header>
<main>
  <AppHero/>
</main>
    </div>
  );
}

export default App;
