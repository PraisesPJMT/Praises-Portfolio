import './App.css';
import {
  BrowserRouter as Router,
  // Routes,
  // Route,
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Cover from './components/Cover';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Cover />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
