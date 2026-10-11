import React from "react";

function LeftImage({
  imageURL,
  productName,
  productDiscription,
  tryDemo,
  learMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

      
        <div className="col-lg-6 text-center mb-4 mb-lg-0">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>

      
        <div className="col-lg-6 px-lg-5">
          <h1 className="mb-4">{productName}</h1>

          <p className="mb-4 text-muted">
            {productDiscription}
          </p>

          <div className="mb-4">
            <a
              href={tryDemo}
              className="me-4 text-decoration-none fw-semibold"
            >
              Try Demo <i className='fa fa-long-arrow-right' aral-hiddin="true"></i>
            </a>

            <a
              href={learMore}
              className="text-decoration-none fw-semibold"
            >
              Learn More <i className='fa fa-long-arrow-right' aral-hiddin="true"></i>
            </a>
          </div>

          <div className="d-flex align-items-center gap-4">
            <a href={googlePlay}>
              <img
                src="Images/googlePlayBadge.svg"
                alt="Google Play"
                className="img-fluid"
                style={{ maxHeight: "50px" }}
              />
            </a>

            <a href={appStore}>
              <img
                src="Images/appstoreBadge.svg"
                alt="App Store"
                className="img-fluid"
                style={{ maxHeight: "50px" }}
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LeftImage;