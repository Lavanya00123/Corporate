import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
import AppServices from './components/services';
import Appworks from './components/works';
import AppTeam from './components/teams';
import AppTestimonials from './components/testimonials';
import AppPricing from './components/pricing';
import AppBlog from './components/blog';
import AppContact from './components/contact';
import AppFooter from './components/footer';

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
  <AppTestimonials/>
  <AppPricing/>
  <AppBlog/>
  <AppContact/>
  <AppFooter/>
</main>

    </div>
  );
}

export default App;
