import React from 'react';
import {
  useHistory
} from 'react-router-dom';
import './home.css';

const Home = () => {
  const history = useHistory();
  return (
    <div className="contents-block">
      <h1>Welcome!</h1>
      <p>
        Galaxy Sounds is a newly established pedal company currently in the developmental stage of our first product, a <span className="no-wrap">multi-effects</span> instrument pedal.
        We're based on Earth, more specifically, St. John's, Newfoundland. We hope to create musical solutions that are intuitive and complement your play style.
      </p>
      <p>
        Without further ado, we would like to announce our <span className="no-wrap">multi-effects</span> pedal, the <em>Asteroid</em>, "rock among the stars".
        This pedal has unique features that we're REALLY excited about, but we can't go too into detail right now.
        If you would like to be on our mailing list, you can <span className="no-wrap">opt-in</span> at the end of our survey.
      </p>
      <p>
        What survey you ask? To ensure we haven't overlooked the things that matter to you, we're looking for your input to ensure this thing actually does kick ass.
        The best way you can help us right now is by taking our survey. To find out more, click <span className="click-to-survey" onClick={() => history.push("/survey")}>here</span>.
      </p>
      <p>
        Our team is committed to creating a quality pedal that brings musicians together.
      </p>
      <p>
        Check back for updates!
      </p>
    </div>
  )
};

export default Home;