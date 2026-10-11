import React from 'react';

function Hero() {
    return (
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <img src ='Images/homeHero.png' alt="Hero Image" className="mb-5"/>
                <h1 className="mt-5">Invest in Your Future  </h1>
                <p>Online investment platform for your financial future.</p>
                <button className="btn custom-btn p-2 fs-5">
  Signup Now
</button>
            </div>
            
        </div>
  );
}

export default Hero;