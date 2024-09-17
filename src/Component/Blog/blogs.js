import React from "react";
import "./BlogArticle.css"; // Import your custom CSS

const BlogArticle = () => {
  return (
    <div className="container my-5">
      {/* Centered Titles */}
      <h3 className="text-center mb-2">BLOGS</h3>
      <h1 className="text-center mb-4">News & Articles</h1>
      <p className="text-center mb-5">Best Articles to get started</p>

      <div className="row">
        {/* Card 1 */}
        <div className="col-md-6 mb-4">
          <div className="card-container">
            <img
              src="https://via.placeholder.com/150"
              className="img-fluid"
              alt="Branding"
            />
            <div className="card-body">
              <h5 className="card-title">Branding</h5>
              <h1 className="card-text">What is the branding and what we need it ? </h1>
              <p>
                Card text goes here. This is a description or content that
                goes along with the image.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card-container">
            <img
              src="https://via.placeholder.com/150"
              className="img-fluid"
              alt="Branding"
            />
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <h1 className="card-text">What is the branding and what we need it ? </h1>
              <p>
                Card text goes here. This is a description or content that
                goes along with the image.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card-container">
            <img
              src="https://via.placeholder.com/150"
              className="img-fluid"
              alt="Branding"
            />
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <h1 className="card-text">What is the branding and what we need it ? </h1>
              <p>
                Card text goes here. This is a description or content that
                goes along with the image.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card-container">
            <img
              src="https://via.placeholder.com/150"
              className="img-fluid"
              alt="Branding"
            />
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <h1 className="card-text">What is the branding and what we need it ? </h1>
              <p>
                Card text goes here. This is a description or content that
                goes along with the image.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card-container">
            <img
              src="https://via.placeholder.com/150"
              className="img-fluid"
              alt="Branding"
            />
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <h1 className="card-text">What is the branding and what we need it ? </h1>
              <p>
                Card text goes here. This is a description or content that
                goes along with the image.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card-container">
            <img
              src="https://via.placeholder.com/150"
              className="img-fluid"
              alt="Branding"
            />
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <h1 className="card-text">What is the branding and what we need it ? </h1>
              <p>
                Card text goes here. This is a description or content that
                goes along with the image.
              </p>
            </div>
          </div>
        </div>
        {/* Additional Cards */}
        {/* Repeat similar structure as Card 1 */}
      </div>
      
    </div>
  );
};

export default BlogArticle;
