import React from 'react';
import {
  useHistory
} from 'react-router-dom';
import './home.css';

const Home = () => {
  const history = useHistory();
  return (
    <div className="contents-block">
      <h1>Galaxy Sounds is working on making<br></br> multi-effects pedals</h1>
      <p>
        Blurb, blurb, blurb blurby blurb blurb, blurb blurb blurb blurb blurb! Blurb blurb blurb blurb blurb!
        Blurb, blurb, blurb blurby blurb blurb, blurb blurb blurb blurb blurb! Blurb blurb blurb blurb blurb!
        Blurb, blurb, blurb blurby blurb blurb, blurb blurb blurb blurb blurb! Blurb blurb blurb blurb blurb!
        Blurb, blurb, blurb blurby blurb blurb, blurb blurb blurb blurb blurb! Blurb blurb blurb blurb blurb!
        Blurb, blurb, blurb blurby blurb blurb, blurb blurb blurb blurb blurb! Blurb blurb blurb blurb blurb!
      </p>

      <p>
        The best way you can help us right now is by taking our survey.<br></br>
        To find out more, click <span className="click-to-survey" onClick={() => history.push("/survey")}>here</span>.
      </p>
    </div>
  )
};

export default Home;