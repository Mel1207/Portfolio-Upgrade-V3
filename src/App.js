import Header from './components/Header';
import Navbar from './components/Navbar';
import Section1 from './components/Section-1';
import Section2 from './components/Section-2';
import './sass/main.css';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Section1 />
      <Section2 />
    </div>
  )
}

export default App;
