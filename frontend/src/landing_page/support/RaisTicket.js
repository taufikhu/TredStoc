import React from 'react';

function RaisTicket() {
  return (
    <div className="container py-5">

      <div className="row mb-5">
        <h1 className="fs-4 mb-0">
          To create a ticket, select a relevant topic
        </h1>
      </div>

      <div className="row mb-5">

        <div className="col-4 px-4">
          <h4 className="mb-3">
            <i className="fa fa-plus-circle me-2" aria-hidden="true"></i>
            Account Opening
          </h4>

          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>
            Online Account Opening
          </a>
          <br />
          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>
            Offline Account Opening
          </a>
          <br />
          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>
            Company, Partnership and HUF Account Opening
          </a>
          <br />
          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>
            NRI Account Opening
          </a>
          <br />
          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>
            Charges at TredStoc
          </a>
          <br />
          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>
            TredStoc IDFC FIRST Bank 3-in-1 Account
          </a>
          <br />
          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>
            Getting Started
          </a>
        </div>

        <div className="col-4 px-4">
          <h4 className="mb-3">
            <i class="fa fa-user" aria-hidden="true"></i>
            Your TredStoc Account
          </h4>

          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>Login Credentials</a><br />
          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>Account Modification and Segment Addition</a><br />
          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>DP ID and bank details</a><br />
          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>Your Profile</a><br />
          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>Transfer and conversion of shares</a><br />
        </div>

        <div className="col-4 px-4">
          <h4 className="mb-3">
            <i class="fa fa-bar-chart" aria-hidden="true"></i>
            Your TredStoc Account
          </h4>

          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>Margin/leverage, Product and Order types</a><br />
          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>Kite Web and Mobile</a><br />
          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>Trading FAQs</a><br />
          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>Corporate Actions</a><br />
          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>Sentinel</a><br />
          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>Kite API</a><br />
          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>Pi and other platform</a><br />
          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>Stockreports</a><br />
          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>GTT</a>
        </div>

      </div>

      <div className="row">

        <div className="col-4 px-4">
          <h4 className="mb-3">
            <i class="fa fa-credit-card" aria-hidden="true"></i>
            Funds
          </h4>

          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>Adding Funds</a><br />
          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>Fund Withdrawal</a><br />
          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>eMandates</a><br />
          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>Adding Bank Accounts</a><br />
        </div>

        <div className="col-4 px-4">
          <h4 className="mb-3">
           <i class="fa fa-opera" aria-hidden="true"></i>
            Console
          </h4>

          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>Reports</a><br />
          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>Ledger</a><br />
          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>Portfolio</a><br />
          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>60 bay Chanllenge</a><br />
          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>IPO</a><br />
          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>Referral Program</a>
        </div>

        <div className="col-4 px-4">
          <h4 className="mb-3">
            <i class="fa fa-circle-o" aria-hidden="true"></i>
            Coin
          </h4>

          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>Understanding Mutual Funds</a><br />
          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>About coin</a><br />
          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>Buying and Selling through Coin</a><br />
          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>Starting an SIP</a><br />
          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>managing your Portfolio</a><br />
          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>Coin App</a><br />
          <a href="#" style={{ textDecoration: 'none', lineHeight: '2.2' }}>Moving to Coin</a>
        </div>

      </div>
    </div>
  );
}

export default RaisTicket;