import React from 'react';
import './Brand.css'; // Import the CSS for styling

 const Brand = () => {
  return (
    <div className="brand-container container">
      <h1>
        Boost Your <span className="highlight">Brand</span> with{' '} <br/> innovation
        <span className="highlight">Digital Marketing</span>
      </h1>
      <p>
        Drive Engagement and conversion with advanced{' '}
        <span className="highlight">Digital Marketing</span> strategy
      </p>

      <button className="start-button">START NOW</button>
      <p>Trusted by thousands of companies</p>

      <div className="logo-container">
        <div className="brand ">
          <i className="fas fa-cogs logo-icon"></i><span>Logo Name 1</span>
        </div>
        <div className="brand">
          <i className="fas fa-bullhorn logo-icon"></i><span>Logo Name 2</span>
        </div>
        <div className="brand">
          <i className="fas fa-envelope logo-icon"></i><span>Logo Name 3</span>
        </div>
        <div className="brand">
          <i className="fas fa-dollar-sign logo-icon"></i><span>Logo Name 4</span>
        </div>
        <div className="brand">
          <i className="fas fa-chart-line logo-icon"></i><span>Logo Name 5</span>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-container">
        <h1 className="services-title">Services</h1>
        <p className="services-description">Strategy service drives digital success with tailored compact content</p>
        
        <div className="services-grid">
          <div className="service-box">
            <i className="fas fa-cogs service-icon"></i>
            <h1>Logo</h1>
          </div>
          <div className="service-box">
            <i className="fas fa-bullhorn service-icon"></i>
            <h1>SEO Marketing</h1>
          </div>
          <div className="service-box">
            <i className="fas fa-dollar-sign service-icon"></i>
            <h1>Finance</h1>
          </div>
        </div>
        <div className="services-grid mt-3">
          <div className="service-box">
            <i className="fas fa-bullhorn service-icon"></i>
            <h1>Logo</h1>
          </div>
          <div className="service-box">
            <i className="fas fa-cogs service-icon"></i>
            <h1>SEO Marketing</h1>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Brand