import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AboutPage from './components/Aboutpage/AboutPage';
import BlogPage from './components/Blogpage/BlogPage';
import Footer from './components/Footer';
import HomePage from './components/Homepage/HomePage';
import PortfolioPage from './components/Portfoliopage/PortfolioPage';
import SingleBlogPage from './components/SingleBlogPage/SingleBlogPage';
import './sass/main.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={HomePage} path='/' exact />
        <Route component={AboutPage} path='/about'/>
        <Route component={SingleBlogPage} path='/blog/:slug'/>
        <Route component={BlogPage} path='/blog'/>
        <Route component={PortfolioPage} path='/portfolio'/>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
