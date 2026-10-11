import React from "react";

function Univers() {
  return (
    <div className="container py-5">

  
      <div className="text-center mb-5">
        <h1 className="fw-bold">The TredStoc Universe</h1>
        <p className="text-muted mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

     
      <div className="row g-5 text-center">

        <div className="col-lg-4 col-md-6">
          <div className="mb-5">
            <img
              src="Images/smallcaseLogo.png"
              alt="Smallcase"
              className="img-fluid mb-3"
              style={{ height: "45px", objectFit: "contain" }}
            />
            <p className="text-muted">
              Thematic investment platform
            </p>
          </div>

          <div>
            <img
              src="Images/zerodhaFundhouse.png"
              alt="Fund House"
              className="img-fluid mb-3"
              style={{ height: "45px", objectFit: "contain" }}
            />
            <p className="text-muted">
              Asset management
            </p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="mb-5">
            <img
              src="Images/streakLogo.png"
              alt="Streak"
              className="img-fluid mb-3"
              style={{ height: "45px", objectFit: "contain" }}
            />
            <p className="text-muted">
              Algo & strategy platform
            </p>
          </div>

          <div>
            <img
              src="Images/goldenpiLogo.png"
              alt="GoldenPi"
              className="img-fluid mb-3"
              style={{ height: "45px", objectFit: "contain" }}
            />
            <p className="text-muted">
              Bonds trading platform
            </p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mx-auto">
          <div className="mb-5">
            <img
              src="Images/sensibullLogo.svg"
              alt="Sensibull"
              className="img-fluid mb-3"
              style={{ height: "45px", objectFit: "contain" }}
            />
            <p className="text-muted">
              Options trading platform
            </p>
          </div>

          <div>
            <img
              src="Images/dittoLogo.png"
              alt="Ditto"
              className="img-fluid mb-3"
              style={{ height: "45px", objectFit: "contain" }}
            />
            <p className="text-muted">
              Insurance platform
            </p>
          </div>
        </div>

      </div>

     
      <div className="text-center mt-5">
        <button className="btn custom-btn px-4 py-2 fs-5">
          SignUp
        </button>
      </div>

    </div>
  );
}

export default Univers;