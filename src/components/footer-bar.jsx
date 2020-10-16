import React from 'react';
import { FaInstagram, FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import './footer-bar.css';

const FooterBar = () => {
  return (
    <div className="footer-bar">
      <div className="social-media-container">
        <a href="https://twitter.com/galaxysoundsca">
          <FaTwitter size="30"></FaTwitter>
        </a>
      </div>
      <div className="social-media-container">
        <a href="https://www.instagram.com/galaxysoundsca/">
          <FaInstagram size="30"></FaInstagram>
        </a>
      </div>
      <p>@galaxysoundsca</p>
      <div className="social-media-container">
        <a href="https://www.facebook.com/galaxysoundsca">
          <FaFacebookSquare size="30"></FaFacebookSquare>
        </a>
      </div>
      <div className="social-media-container">
        <a href="https://www.youtube.com/channel/UCUa7UQjhZ5NVyYrLG6MTJyw?view_as=subscriber">
          <FaYoutube size="30"></FaYoutube>
        </a>
      </div>
    </div>
  )
};

export default FooterBar;