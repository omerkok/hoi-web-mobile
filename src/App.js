import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import HairTransplantPage from './pages/HairTransplantPage';
import DhiAndFuePage from './pages/DhiAndFuePage';
import BlogPage from './pages/BlogPage';
import ContactUsPage from './pages/ContactUsPage';
import AboutUsPage from './pages/AboutUsPage';
import OurClinicPage from './pages/OurClinicPage';
import BeforeAfterPage from './pages/BeforeAfterPage';

function App() {
  let width = document.documentElement.clientWidth;
  let height = document.documentElement.clientHeight;
  return (
    <div className='App' style={{ width: width, height: height }}>
      <HomePage />
    </div>
  );
}

export default App;
