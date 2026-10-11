import React from 'react';

function Brokrage() {
    return (

        <div className="container py-5">

            <div className="row g-5 text-center">

                <div className="col-lg-4 col-md-6">
                    <div className="mb-5">
                        <img
                            src="Images/pricing0.svg"
                            alt="Smallcase"
                            className="img-fluid mb-3"
                            style={{ height: "200px", objectFit: "contain" }}
                        />
                        <h2 className='pb-3'>Free equity delivery</h2>
                        <p className="text-muted">
                            All equity delivery investments (NSE, BSE), <br/> are absolutely free - <i class="fa fa-inr" aria-hidden="true"></i> 0 brokerage.
                        </p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="mb-5">
                        <img
                            src="Images/intradayTrades.svg"
                            alt="Streak"
                            className="img-fluid mb-3"
                            style={{ height: "200px", objectFit: "contain" }}
                        />
                        <h2 className='pb-2'>Intraday and F&Q traades</h2>
                        <p className="text-muted">
                            Flat Rs. 20 or 0.03% (whichever is lower)<br /> per executed order on intraday trades<br/> across equity, currency, and commodity <br/>trades.
                        </p>
                    </div>

                   
                </div>

                <div className="col-lg-4 col-md-6 mx-auto">
                    <div className="mb-5">
                        <img
                            src="Images/pricing0.svg"
                            alt="Sensibull"
                            className="img-fluid mb-3"
                            style={{ height: "200px", objectFit: "contain" }}
                        />
                        <h2 className='mb-2'>Free direct MF</h2>
                        <p className="text-muted">
                            All equity delivery investments (NSE, BSE), <br/> are absolutely free - <i class="fa fa-inr" aria-hidden="true"></i> 0 brokerage.
                        </p>
                    </div>

                </div>

            </div>


         

        </div>

    );

}

export default Brokrage;