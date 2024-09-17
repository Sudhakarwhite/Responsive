import React from 'react';
import './Slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Ensure Bootstrap JS is loaded

const Carousel = () => {
  return (
    <div>
      <div className="carousel-wrapper">
        <h4>TESTIMONIAL</h4>
        <h1>Customer is our Top Priority</h1>
        <p>We survey all of our clients, and the results go directly to the CEO.</p>

        {/* Carousel inside a styled box */}
        <div className="carousel-box">
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
              <li data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></li>
              <li data-bs-target="#carouselExample" data-bs-slide-to="1"></li>
              <li data-bs-target="#carouselExample" data-bs-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row m-5">
                  <div className="col-md-6 d-flex align-items-center">
                    <div>
                      <h2>Gymstory</h2>
                      <h3>Kornix Is The Best Digital Agency I Have <br></br> Ever Seen! Highly Recommended!</h3>
                      <p>Generate random words, nouns, verbs, adjectives, letters, phrases, sentences, or numbers to brainstorm and create new ideas.</p>
                      <div>
                        <h5>Diana Loreza</h5>
                        <h5>Direct of GYMSTORY</h5>
                    </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img src="https://via.placeholder.com/500" alt="Slide 1 Image" className="d-block w-100" />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row m-5">
                  <div className="col-md-6 d-flex align-items-center">
                    <div>
                      <h2>Gymstory</h2>
                      <h3>Kornix Is The Best Digital Agency I Have <br></br> Ever Seen! Highly Recommended!</h3>
                      <p>Generate random words, nouns, verbs, adjectives, letters, phrases, sentences, or numbers to brainstorm and create new ideas.</p>
                      <div>
                        <h5>Diana Loreza</h5>
                        <h5>Direct of GYMSTORY</h5>
                    </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img src="https://via.placeholder.com/500" alt="Slide 2 Image" className="d-block w-100" />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row m-5">
                  <div className="col-md-6 d-flex align-items-center">
                    <div>
                      <h2>Gymstory</h2>
                      <h3>Kornix Is The Best Digital Agency I Have <br></br> Ever Seen! Highly Recommended!</h3>
                      <p>Generate random words, nouns, verbs, adjectives, letters, phrases, sentences, or numbers to brainstorm and create new ideas.</p>
                      <div>
                        <h5>Diana Loreza</h5>
                        <h5>Direct of GYMSTORY</h5>
                    </div>
                    </div>
                    
                  </div>
                  <div className="col-md-6">
                    <img src="https://via.placeholder.com/500" alt="Slide 3 Image" className="d-block w-100" />
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExample" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExample" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
