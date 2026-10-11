import React from "react";

function Summary() {
    return (
        <div className="container-fluid">

            {/* Greeting */}
            <div className="row border-bottom py-4">
                <div className="col">
                    <h3 className="text-muted fw-normal">
                        Hi, User!
                    </h3>
                </div>
            </div>

            {/* Equity */}
            <div className="row py-5">
                <div className="col">
                    <h5 className="fw-normal">
                        Equity
                    </h5>
                </div>
            </div>

            {/* Equity details */}
            <div className="row border-bottom pb-5">

                {/* Margin available */}
                <div className="col-5 border-end">
                    <h2 className="fw-normal">
                        3.74k
                    </h2>

                    <p className="text-muted small mt-4">
                        Margin available
                    </p>
                </div>

                {/* Vertical divider */}
                <div className="col-2">
                </div>

                {/* Margins */}
                <div className="col-5 ps-5">
                    <p className="text-muted small mb-2">
                        Margins used&nbsp;&nbsp; 0
                    </p>

                    <p className="text-muted small">
                        Opening balance&nbsp;&nbsp; 3.74k
                    </p>
                </div>

            </div>

            {/* Holdings */}
            <div className="row py-5">
                <div className="col">
                    <h5 className="fw-normal">
                        Holdings (13)
                    </h5>
                </div>
            </div>

        </div>
    );
}

export default Summary;