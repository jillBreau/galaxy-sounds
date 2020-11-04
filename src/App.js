import React, { useState } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import StarfieldAnimation from 'react-starfield-animation'
import NavBar from './components/navigation/nav-bar';
import Sidebar from './components/navigation/sidebar';
import FooterBar from './components/navigation/footer-bar';
import Home from './components/pages/home';
import WhoWeAre from './components/pages/who-we-are';
import Survey from './components/pages/survey';
import Gallery from './components/pages/gallery';
import './App.css';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
  <Router>
    <div className="App">
      <header>
        <NavBar toggleSidebar={setSidebarOpen} sidebarIsOpen={sidebarOpen}/>
      </header>
      <section>
        <div className="App-router">
        <StarfieldAnimation
          depth={5000}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%'
          }}
        />
          <Switch>
            <Route path="/who-we-are">
              <WhoWeAre />
            </Route>
            <Route path="/survey">
              <Survey />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </section>
      <header>
        <Sidebar toggleSidebar={setSidebarOpen} isOpen={sidebarOpen}/>
      </header>
      <footer>
        <FooterBar />
      </footer>
    </div>
  </Router>
  )
};

export default App;
