import React from 'react';


function RightImage({
    imageURL,
    productName,
    productDescrption,
    learnMore }) {
    return (
        <div className='container py-5'>
            <div className='row align-items-center'>
                <div className='col-lg-6 px-lg-5'>
                    <h1 className="mb-4">{productName}</h1>
                    <p className='mb-4 text-muted'>{productDescrption}</p>
                    <div><a href={learnMore} className="me-4 text-decoration-none fw-semibold">Learn More <i className='fa fa-long-arrow-right' aral-hiddin="true"></i></a></div>
                </div>
                <div className='col-lg-6 text-center mb-4 mb-lg-0 '>
                    <img src={imageURL} alt={productName}
                        className="img-fluid"
                        style={{ maxWidth: "90%" }} />
                </div>
            </div>
        </div>
    );
}

export default RightImage;