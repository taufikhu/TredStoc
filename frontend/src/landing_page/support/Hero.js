import React from 'react';

function Hero() {
  return (
    <section className="container-fluid" id="supportTicket">
      <div className="container">

      
        <div
          className="row align-items-center justify-content-between py-4 py-md-5"
          id="supportRow"
        >
          <div className="col-12 col-md-auto mb-3 mb-md-0">
            <h4 className="text-white mb-0">Support Portal</h4>
          </div>

          <div className="col-12 col-md-auto">
            <a href="#" className="text-white">
              Track Tickets
            </a>
          </div>
        </div>

        
        <div className="row align-items-start pb-4 pb-md-5">

         
          <div className="col-12 col-lg-7 mb-5">
            <h3 className="text-white mb-4">
              Search for an answer or browse help topics
              <br className="d-none d-md-block" />
              to create a ticket
            </h3>

            <input
              type="text"
              className="form-control form-control-lg mb-4"
              placeholder="Eg: How do I activate F&O, why is my order getting rejected?"
            />

            <div className="d-flex flex-wrap gap-3">
              <a href="#" className="text-white">
                Track account opening
              </a>

              <a href="#" className="text-white">
                Tracking segment activation
              </a>

              <a href="#" className="text-white">
                Intraday margins
              </a>

              <a href="#" className="text-white">
                Kite user manual
              </a>
            </div>
          </div>

          
          <div className="col-12 col-lg-5">
            <div className="ps-lg-4">
              <h2 className="text-white mb-4">Featured</h2>

              <ol className="text-white ps-3">
                <li className="mb-3">
                  <a href="#" className="text-white">
                    Current Takeovers and Delisting - January 2024
                  </a>
                </li>

                <li>
                  <a href="#" className="text-white">
                    Latest Intraday leverages - MIS & CO
                  </a>
                </li>
              </ol>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;