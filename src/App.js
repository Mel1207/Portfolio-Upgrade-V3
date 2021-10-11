import Navbar from './components/Navbar';
import './sass/main.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="section-header">Hi There I'm MJ</h2>
        <h1>FRONT_END DEVELOPER</h1>
        <h1>UI/UX DESIGNER</h1>
        <a href="#!" className="btn">See Works</a>
      </div>
    </div>
  )
}

export default App;
