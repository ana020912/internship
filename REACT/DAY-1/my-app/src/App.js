import logo from './logo.svg';
import './App.css';
import Image from './components/Image';
import Link from './components/Link';
import Paragraph from './components/Paragraph';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < Image logoName= {logo} className="App-logo" infos = "logo"/>
        <Paragraph />
        <Link className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"/>
      </header>
    </div>
  );
}

export default App;
