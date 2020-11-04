import React from 'react';
import './who-we-are.css';

const WhoWeAre = () => {
  return (
  <div className="contents-block">
    <h1 className="who-we-are-heading">Meet the Galaxy Sounds Team</h1>
    <div className="employee-section">
      <div className="img-container">
        <img src="brett.png" alt="Brett Heistinger"></img>
      </div>
      <div className="employee-info">
        <h4>Brett Heistinger</h4>
        <p>
          Hello, my name is Brett Heistinger and I am one of the <span className="no-wrap">co-founders</span> of Galaxy Sounds.
          I'm currently a Hardware Designer, providing electrical and mechanical solutions to our products.
          Being able to develop solutions for fellow musicians has been a dream of mine for a while
          and I can't put into words how excited I am for Galaxy Sounds. Actually, you could say I'm over the moon about it...
        </p>
      </div>
    </div>
    <div className="employee-section">
      <div className="img-container">
        <img src="matthew.jpg" alt="Matthew Hiscock"></img>
      </div>
      <div className="employee-info">
        <h4>Matthew Hiscock</h4>
        <p>
          Hey all! My name is Matthew Hiscock and I am super excited to be helping bring Galaxy Sounds to life.
          At Galaxy I am the Principle Embedded Systems Designer, which is an area of technology I love working on.
          I have past experience in the firmware development field, and I am incredibly eager to bring those skills to Galaxy Sounds.
        </p>
      </div>
    </div>
    <div className="employee-section">
      <div className="img-container">
        <img src="jake.png" alt="Jake Miller"></img>
      </div>
      <div className="employee-info">
        <h4>Jake Miller</h4>
        <p>
          Hey! My name is Jake Miller I am a <span className="no-wrap">co-founder</span> and Hardware Designer here at Galaxy Sounds.
          My main role is electrical and mechanical design support on our products during all phases of their development.
          I am really excited for Galaxy Sounds because we have a great team and we are going to make some really cool stuff.
        </p>
      </div>
    </div>
    <div className="employee-section">
      <div className="img-container">
        <img src="matt.png" alt="Matt Hickey"></img>
      </div>
      <div className="employee-info">
        <h4>Matt Hickey</h4>
        <p>
          Hey, I’m Matt Hickey, a software developer for Galaxy Sounds.
          My responsibility is primarily frontend development, providing users with an elegant and intuitive interface to program their board the way they want.
          Looking forward to bringing an affordable yet powerful product to music enthusiasts everywhere!
        </p>
      </div>
    </div>
    <div className="employee-section">
      <div className="img-container">
        <img src="nathaniel.jpg" alt="Nathaniel Johnson"></img>
      </div>
      <div className="employee-info">
        <h4>Nathaniel Johnson</h4>
        <p>
          Hello, my name is Nathaniel Johnson and I am a software developer for Galaxy Sounds.
          I will be working mostly with the frontend and backend to ensure our customers can easily edit and create their sounds through the internet.
          The sky is the limit for what is possible with our Galaxy pedal!
        </p>
      </div>
    </div>
  </div>
  )
};

export default WhoWeAre;