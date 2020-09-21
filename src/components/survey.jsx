import React from 'react';
import './survey.css';

const Survey = () => {
  return (
    <div className="contents-block">
      <p>We are doing a survey.</p>
      <p>This is the purpose of the survey.</p>
      <a href="https://en.wikipedia.org/wiki/Survey"><button className="survey-button">Take Survey</button></a>
    </div>
  )
};

export default Survey;