import React from 'react';

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="Images/largestBroker.svg" alt="Awards" className="img-fluid" />
        </div>
        <div className="col-6 p-5">
          <h1>Largest Online Broker</h1>
          <p className='mb-5'>We are proud to have received several awards for our innovative solutions and commitment to excellence.</p>
          <div className="row">
            <div className="col-6"> <ul>
            <li><p>Future and Options</p></li>
            <li><p>Commodity derivatives</p></li>
            <li><p>Currency derivatives</p></li>
            
          </ul>
          </div>
            <div className="col-6">
               <ul>
            <li><p>Stocks & IPOs</p></li>
            <li><p>Direct mutual funds</p></li>
            <li><p>Bonds and government securities</p></li>
            
          </ul>
            </div>

            </div>
          <img src="Images/pressLogos.png" className="img-fluid mt-3" style={{ Width: "90%", height: "auto" }} />
        </div>
        </div>
      
    </div>
  );
};

export default Awards;