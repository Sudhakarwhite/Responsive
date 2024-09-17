import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css"; // Import custom CSS

const Footer = () => {
  return (<>
  <div className="box-container">
      <div className="box">
        <h1>Stand out and make an impact</h1>
        <p>David Smith - CEO of a Tech Startup</p>
        <p>Jump on a membership and start request design right away</p>
        <button>See Pricing</button>
      </div>
    </div>
    <div className="footer container mt-5">
      <div className="footer-container">
        <div className="footer-section">
          <h5>Click IT</h5>
          <p>
            It typically contains a copyright notice, link to a privacy policy, sitemap, logo, contact information, social media icons, and an email sign-up form. In short, a footer contains information that improves a website's overall usability.
          </p>
        </div>
        <div className="footer-section">
          <h5 className="color">Our Services</h5>
          <ul>
            <li><a href="#">SEO Marketing</a></li>
            <li><a href="#">Research Topic Trendings</a></li>
            <li><a href="#">Email Marketing</a></li>
            <li><a href="#">Google PPC</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h5 className="color">Our Location</h5>
          <ul>
            <li><a href="#">USA</a></li>
            <li><a href="#">India</a></li>
            <li><a href="#">Canada</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h5 className="color">Contact</h5>
          <p>Email: contact@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <ul className="social-media d-flex">
            <li><a href="#"><FaFacebook /></a></li>
            <li><a href="#"><FaTwitter /></a></li>
            <li><a href="#"><FaInstagram /></a></li>
          </ul>
        </div>
      </div>
    </div>
  
  </>
    
  );
};

export default Footer;
