import React from "react";
import "./PricingTable.css"; // Optional for additional styling
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PricingTable = () => {
  return (
    <div className="container my-5">
      <h5 className="text-center mb-4 color">CLEAR & SIMPLE PRICING</h5>
      <h1 className="text-center mb-4">
        Simple pricing to level up your brand.
      </h1>
      <p className="text-center mb-4">
        Senior experts. On-demand requests. Fast turnarounds. Flat<br></br>{" "}
        Monthly fee. Cancel anytime.
      </p>

      <div className="row">
        {/* Basic Plan */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
          <div className="card text-center shadow-lg">
            <div className="card-header bg-dark text-white">
              <div className="d-flex justify-content-between align-items-center">
                <h3>Basic</h3>
                <div className="popular-button-container">
                  <button className="btn btn-success btn-popular">
                    Most Popular
                  </button>
                </div>
              </div>
              <p className="mt-2">One request at a time. For Component</p>
              <hr className="price-divider" />
              <h4 className="price">$2,995/m</h4>
              <p className="payment-details">Pause or cancel anytime</p>
              <hr className="price-divider" />
            </div>
            <div className="card-body bg-dark">
              <ul className="list-unstyled">
                <li>5 Users</li>
                <li>10GB Storage</li>
                <li>Email Support</li>
                <li>Basic Analytics</li>
              </ul>
              <button className="btn btn-outline-success btn-spacing">
                Click to buy
              </button>
              <br></br>
              <button className="btn btn-success btn-spacing mt-2">
                Click to buy
              </button>
            </div>
          </div>
        </div>

        {/* Standard Plan */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
          <div className="card text-center shadow-lg">
            <div className="card-header bg-dark text-white">
              <div className="d-flex justify-content-between align-items-center">
                <h3>Standard</h3>
                <div className="popular-button-container">
                  <button className="btn btn-success btn-popular">
                    Most Popular
                  </button>
                </div>
              </div>
              <p className="mt-2">One request at a time. For Component</p>
              <hr className="price-divider" />
              <h4 className="price">$4,795/m</h4>
              <p className="payment-details">Pause or cancel anytime</p>
              <hr className="price-divider" />
            </div>
            <div className="card-body bg-dark">
              <ul className="list-unstyled">
                <li>15 Users</li>
                <li>50GB Storage</li>
                <li>Priority Email Support</li>
                <li>Advanced Analytics</li>
              </ul>
              <button className="btn btn-outline-success btn-spacing">
                Click to buy
              </button>
              <br></br>
              <button className="btn btn-success btn-spacing mt-2">
                Click to buy
              </button>
            </div>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
          <div className="card text-center shadow-lg">
            <div className="card-header bg-dark text-white">
              <div className="d-flex justify-content-between align-items-center">
                <h3>Basic-Weekly</h3>
              </div>
              <p className="mt-2">One request at a time. For Component</p>
              <h4 className="price">$890/m</h4>
              <p className="payment-details">Paid per Weekly</p>
              <hr className="price-divider" />
            </div>
            <div className="card-body bg-dark">
              <ul className="list-unstyled">
                <li>Unlimited Users</li>
                <li>Unlimited Storage</li>
                <li>24/7 Support</li>
                <li>Custom Analytics</li>
              </ul>
              <button className="btn btn-outline-success btn-spacing">
                Click to buy
              </button>{" "}
              <br></br>
              <button className="btn btn-success btn-spacing mt-2">
                Click to buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
