import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';

console.log('Element.clientWidth ', Element.clientWidth);
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
