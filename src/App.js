import { ThemeProvider } from 'styled-components';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <ThemeProvider>
      <Body>
        <NavBar />
      </Body>
    </ThemeProvider>
  );
}

export default App;
