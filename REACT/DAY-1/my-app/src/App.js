import logo from './logo.svg';
import './App.css';
import Image from './components/Image';
import Link from './components/Link';
import Paragraph from './components/Paragraph';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < Image />
        <Paragraph />
        <Link />
      </header>
    </div>
  );
}

export default App;
