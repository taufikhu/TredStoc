import React from 'react';

function Stats() {
    return (
        <div className="container p-3">
            <div className="row p-5">
                <div className="col-6 p-5">
                   <h1 className='mb-5 fs-3'>Trust with confidence</h1>
                   <h3 className='fs-4'>Customer first always</h3>
                   <p className='text-muted'>That's why 1.3 million customers trust us jwith 3.5+ lakh crores worth of equity investments</p>
                    <h3 className='fs-4'>No spam or gimmicks</h3>
                    <p className='text-muted'>We don't spam our customers with calls or emails. We don't use gimmicks to get you to invest. We don't sell your data to third parties.</p>  
                    <h3 className='fs-4'>The TredStoc universe</h3>
                    <p className='text-muted'>Not just an app, but a whole ecosystem of financial services. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h3 className='fs-4'    >Do better with money</h3>
                    <p className='text-muted' >With initiative like Nudge and kill Switch, we don't just facilitate investing, we help you make smarter financial decisions.</p>
                </div>
                <div className="col-6 p-5text-center">
                    <img src="Images/ecosystem.png" style={{ width: "90%", height: "auto" }} />
                    <div className="text-center">
                        <a href='' className="mx-5" style={{textDecoration:'none'}}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='' style={{textDecoration:'none'}}  >Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                
            </div>  
        </div>
    );
}

export default Stats;