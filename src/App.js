import React, { useEffect } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import useTheme from './components/theme';
import Main from './components/main';



const App = () => {

  const [theme, setTheme] = useTheme();
  

  return(
    <div className={`flex flex-col min-h-screen font-medium
    font-sans   ${theme}`} >
      <Header setTheme={setTheme} theme={theme} />
      <Main />
      <Footer />     
    </div>

  )
}

export default App;

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-slate-50">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-orange-600 font-bold bg-blue-400">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/