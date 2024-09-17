import React from 'react';
import './Help.css'; // Add a CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faW, faDesktop, faCalendar, faDollarSign, faFootballBall, faCrown } from '@fortawesome/free-solid-svg-icons';

 const Help = () => {
  return (
    <div className="help-container container">
      <h1>OUR CAPABILITIES</h1>
      <p>We can help you with...</p>

      {/* Buttons container */}
      <div className="buttons-container">
        {/* First row with 7 buttons */}
        <div className="button-row">
          <button className="btn btn-primary">Web Design @ui</button>
          <button className="btn btn-primary">Development</button>
          <button className="btn btn-primary">SEO Optimization</button>
          <button className="btn btn-primary">Branding</button>
          <button className="btn btn-primary">Marketing</button>
          <button className="btn btn-primary">Analytics</button>
          <button className="btn btn-primary">Support</button>
        </div>

        {/* Second row with 6 buttons */}
        <div className="button-row">
          <button className="btn btn-primary">Mobile Design</button>
          <button className="btn btn-primary">Hosting</button>
          <button className="btn btn-primary">E-commerce</button>
          <button className="btn btn-primary">Copywriting</button>
          <button className="btn btn-primary">Consulting</button>
          <button className="btn btn-primary">Maintenance</button>
        </div>
      </div>

      {/* Subscription section */}
      <div className="subscription-section d-flex justify-content-between align-items-start mt-5">
        <div className="subscription-text">
          <h1>The design subscription that connects you to your dream team</h1>
        </div>
        <div className="subscription-description">
          <p>A word randomizer for finding quick inspiration. Generate a random list of words from 2500+ of the most common English words. Also filter by part of speech!</p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>

      {/* Rows and columns with icons */}
      <div className="row-with-lines bg-dark mt-3">
        {/* Row 1 */}
        <div className="row">
          <div className="col">
            <div className="content-box">
              <FontAwesomeIcon icon={faBolt} className="icon" />
              <h3>1. On-demand request</h3>
              <p>Put on the table to give some random words.</p>
            </div>
          </div>
          <div className="col">
            <div className="content-box">
              <FontAwesomeIcon icon={faW} className="icon" />
              <h3>2. Another Request</h3>
              <p>Another explanation or service feature here.</p>
            </div>
          </div>
          <div className="col">
            <div className="content-box">
              <FontAwesomeIcon icon={faDesktop} className="icon" />
              <h3>3. A Different Request</h3>
              <p>More information for this section.</p>
            </div>
          </div>
        </div>
        {/* Row 2 */}
        <div className="row">
          <div className="col">
            <div className="content-box">
              <FontAwesomeIcon icon={faCalendar} className="icon" />
              <h3>4. Additional Service</h3>
              <p>Description goes here.</p>
            </div>
          </div>
          <div className="col">
            <div className="content-box">
              <FontAwesomeIcon icon={faDollarSign} className="icon" />
              <h3>5. Other Features</h3>
              <p>Short explanation here.</p>
            </div>
          </div>
          <div className="col">
            <div className="content-box">
              <FontAwesomeIcon icon={faFootballBall} className="icon" />
              <h3>6. Final Feature</h3>
              <p>Details about the feature or service.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="content-box">
              <FontAwesomeIcon icon={faCalendar} className="icon" />
              <h3>4. Additional Service</h3>
              <p>Description goes here.</p>
            </div>
          </div>
          <div className="col">
            <div className="content-box">
              <FontAwesomeIcon icon={faDollarSign} className="icon" />
              <h3>5. Other Features</h3>
              <p>Short explanation here.</p>
            </div>
          </div>
          <div className="col">
            <div className="content-box">
              <FontAwesomeIcon icon={faFootballBall} className="icon" />
              <h3>6. Final Feature</h3>
              <p>Details about the feature or service.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Help