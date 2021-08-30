import { GlobalStyle } from './GlobalStyles/GlobalStyle';
import './App.css';
import Home from './Components/Home';
import Graphs from './Components/Graphs';
import CountryWise from './Components/CountryWise';

function App() {
  return (
    <>
    <Home />
    <CountryWise />
    <Graphs />
    <GlobalStyle />
    </>
  );
}

export default App;
