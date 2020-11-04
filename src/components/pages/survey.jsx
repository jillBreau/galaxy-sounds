import React from 'react';
import './survey.css';

const Survey = () => {
  return (
    <div className="contents-block">
      <p>
        To ensure we haven't overlooked the things that matter to you, we're looking for your input to ensure our <span className="no-wrap">multi-effects</span> pedal actually does kick ass.
      </p>
      <p>
        Feel free to go into as much detail with your answers as you like. Not all questions require answers.
      </p>
      <p>
        We appreciate you taking the time to fill out this survey. Thank you and enjoy!
      </p>
      <a href="https://forms.gle/BpyFHet4dAovCZAU8"><button className="survey-button">Take Survey</button></a>
    </div>
  )
};

export default Survey;