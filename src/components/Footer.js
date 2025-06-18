import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* Column 1 - About */}
          <div className="col-md-3 mb-4">
            <h5>About Us</h5>
            <p>
              BookyShow is your ultimate destination for booking movies,
              events, and more across India.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Movies</a></li>
              <li><a href="/" className="text-white text-decoration-none">Events</a></li>
              <li><a href="/" className="text-white text-decoration-none">Plays</a></li>
              <li><a href="/" className="text-white text-decoration-none">Sports</a></li>
              <li><a href="/" className="text-white text-decoration-none">Offers</a></li>
            </ul>
          </div>

          {/* Column 3 - Support */}
          <div className="col-md-3 mb-4">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Help Center</a></li>
              <li><a href="/" className="text-white text-decoration-none">Contact Us</a></li>
              <li><a href="/" className="text-white text-decoration-none">FAQs</a></li>
              <li><a href="/" className="text-white text-decoration-none">Terms & Conditions</a></li>
              <li><a href="/" className="text-white text-decoration-none">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 4 - Social & Contact */}
          <div className="col-md-3 mb-4">
            <h5>Connect With Us</h5>
            <div className="d-flex gap-3 mb-2">
              <a href="/" className="text-white"><i className="bi bi-facebook"></i></a>
              <a href="/" className="text-white"><i className="bi bi-instagram"></i></a>
              <a href="/" className="text-white"><i className="bi bi-twitter-x"></i></a>
              <a href="/" className="text-white"><i className="bi bi-youtube"></i></a>
            </div>
            <p>Email: support@bookyshow.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>

        </div>

        <hr className="border-light" />
        <p className="text-center mb-0">
          &copy; {new Date().getFullYear()} BookyShow. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
