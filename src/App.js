import React from 'react';
import {
  Route,
  Link,
  HashRouter as Router
} from 'react-router-dom'
import Home from './components/home'
import Introduction from './components/introduction'
import Technologies from './components/technologies'
import Projects from './components/projects'
import Contact from './components/contact'


import './App.css';

function App() {
  return (
    <>
      <Router>
            <div className="navBar">
              <nav>
                <ul className="navBarUL">
                  <Link to='/'><li className="navBarLI">Contact</li></Link>
                  <Link to="/introduction"><li className="navBarLI">Me</li></Link>
                  <Link to="/projects"><li className="navBarLI">Projects</li></Link>

                </ul>
              </nav>
            </div>

            <Route  path='/' component={Home}/>
            <Route exact path='/' component={Contact}/>
            <Route exact path='/introduction' component={Introduction}/>
            <Route exact path='/projects' component={Projects}/>


      </Router>
    </>
  );
}
// <Link to="/technologies"><li className="navBarLI">Technologies</li></Link>
// <Route exact path='/technologies' component={Technologies} />
export default App;
