import React from 'react';
import './Box.css'; // Import custom CSS
import img from '../../images//download.jpg';
import img2 from '../../images/download1.jpg';

const Section = () => {
  return (
    <div className="container">
      <h4>Why Choose Us? ------</h4>

      {/* First Row */}
      <div className="row mt-5">
        <img
          src={img}
          className="img-fluid col-md-6 col-sm-12" /* Adjusting with col-sm-12 for mobile */
          alt="Branding"
        />
        <div className="col-md-6 col-sm-12">
          < h1 className="text">

            Solution Tailored <br />
            Specification to Your <br />
            Business Needs
          </h1>
          <p>
            An element with position: absolute; is positioned relative to the
            nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
          </p>
          <button className="btn btn-primary">Read more</button>
        </div>
      </div>

      {/* Second Row */}
      <div className="row mt-5">
        <div className="col-md-6 col-sm-12">
          <h1 className="text">
            Solution Tailored <br />
            Specification to Your <br />
            Business Needs
          </h1>
          <p>
            An element with position: absolute; is positioned relative to the
            nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
          </p>
          <button className="btn btn-primary">Read more</button>
        </div>
        <img
          src={img2}
          className="img-fluid col-md-6 col-sm-12"
          alt="Description of Image 2"
        />
      </div>

      {/* Third Row */}
      <div className="row mt-5">
        <img
          src={img}
          className="img-fluid col-md-6 col-sm-12"
          alt="Branding"
        />
        <div className="col-md-6 col-sm-12">
          <h1 className="text">
            Solution Tailored <br />
            Specification to Your <br />
            Business Needs
          </h1>
          <p>
            An element with position: absolute; is positioned relative to the
            nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
          </p>
          <button className="btn btn-primary">Read more</button>
        </div>
      </div>

      {/* Work with Click It New Tech Section */}
      <div className="work-section text-center">
        <h1 className='text'>Work with Click It New Tech</h1>
        <div className="icon-row">
          <div className="icon-box">
            <i className="icon">🌟</i>
            <h2>10,000</h2>
            <h5>Happy Customers</h5>
          </div>
          <div className="icon-box">
            <i className="icon">🎉</i>
            <h2>20,000</h2>
            <h5>Successful Projects</h5>
          </div>
          <div className="icon-box">
            <i className="icon">🚀</i>
            <h2>30,000</h2>
            <h5>Innovations</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
