import React from 'react';

function Footer() {
  return (
    <footer className="container-fluid footer bg-light py-4 py-md-5">
      <div className="container">

        <div className="row g-4">

          
          <div className="col-12 col-md-6 col-lg-4">
            <img
              src="Images/tred.png"
              alt="TredStoc Logo"
              className="mb-3"
              style={{ width: '180px', maxWidth: '100%' }}
            />

            <p className="text-muted">
              © 2023 My App. All rights reserved.
            </p>

            <div className="d-flex flex-wrap gap-3 social-icons">
              <a href="#">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <h5 className="mb-3">Company</h5>

            <ul className="list-unstyled">
              <li className="mb-2"><a href="#">About Us</a></li>
              <li className="mb-2"><a href="#">Careers</a></li>
              <li className="mb-2"><a href="#">Products</a></li>
              <li className="mb-2"><a href="#">Pricing</a></li>
              <li className="mb-2"><a href="#">Blog</a></li>
              <li className="mb-2"><a href="#">Referral Programme</a></li>
            </ul>
          </div>

          
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <h5 className="mb-3">Support</h5>

            <ul className="list-unstyled">
              <li className="mb-2"><a href="#">Help Center</a></li>
              <li className="mb-2"><a href="#">FAQs</a></li>
              <li className="mb-2"><a href="#">Terms of Service</a></li>
              <li className="mb-2"><a href="#">Contact Us</a></li>
              <li className="mb-2"><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          
          <div className="col-12 col-sm-6 col-md-4 col-lg-2">
            <h5 className="mb-3">Account</h5>

            <ul className="list-unstyled">
              <li className="mb-2"><a href="#">Login</a></li>
              <li className="mb-2"><a href="#">Sign Up</a></li>
              <li className="mb-2"><a href="#">Manage Account</a></li>
            </ul>
          </div>

        </div>

        
        <div className="row mt-4 mt-md-5 pt-3 border-top">
          <div className="col-12">
            <p className="text-center mb-0 small text-muted">
              TredStoc Broking Ltd.: Member of NSE & BSE | Registered Office: Mumbai, India.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;