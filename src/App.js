import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import HairTranspalantPage from './Pages/HairTranspalantPage';
import DhiAndFuePage from './Pages/DhiAndFuePage';
import BlogPage from './Pages/BlogPage';
import ContactUsPage from './Pages/ContactUsPage';
import AboutUsPage from './Pages/AboutUsPage';
import OurClinicPage from './Pages/OurClinicPage';

function App() {
  let width = document.documentElement.clientWidth;
  let height = document.documentElement.clientHeight;
  return (
    <div className='App' style={{ width: width, height: height }}>
      <OurClinicPage />
    </div>
  );
}

export default App;
