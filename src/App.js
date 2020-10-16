import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import StarfieldAnimation from 'react-starfield-animation'
import NavBar from './components/nav-bar';
import FooterBar from './components/footer-bar';
import Home from './components/home';
import WhoWeAre from './components/who-we-are';
import Survey from './components/survey';
import Gallery from './components/gallery';
import './App.css';

const App = () => {
  return (
  <Router>
    <div className="App">
      <StarfieldAnimation
        depth={5000}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      />
      <header>
        <NavBar />
      </header>
      <section>
        <div className="App-router">
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
      <footer>
        <FooterBar />
      </footer>
    </div>
  </Router>
  )
};

export default App;
