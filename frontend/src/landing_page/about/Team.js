import React from 'react';

function Team() {
  return (
    <div className="container py-4 py-md-5">

      
      <div className="row text-center border-top pt-4 pt-md-5 mb-4">
        <div className="col-12">
          <h2 className="mb-0">People</h2>
        </div>
      </div>

     
      <div className="row align-items-center g-4 g-md-5">

        
        <div className="col-12 col-md-6 text-muted text-center">
          <img
            src="Images/taufik.jpg"
            alt="Taufik Husain"
            className="img-fluid rounded-circle"
            style={{ width: '200px', maxWidth: '80%' }}
          />

          <h3 className="mt-4 mb-1">Taufik Husain</h3>
          <p className="mb-0">CEO & Founder</p>
        </div>

        
        <div className="col-12 col-md-6 text-muted">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p>
            We are committed to providing the best trading experience to our
            customers and are constantly innovating to make our platform better.
            We believe that technology is the key to unlocking the potential of
            retail traders and investors in India.
          </p>

          <p className="mb-0">
            We are proud to be a part of the Indian stock market and are
            committed to helping our customers succeed in their trading and
            investment journey.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Team;