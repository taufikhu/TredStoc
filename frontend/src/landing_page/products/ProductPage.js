import React from 'react';
import Hero from './Hero';
import LeftImage from './LeftImage';
import RightImage from './RightImage';
import Univers from './Univers';
import Footer from '../Footer';
import Navbar from '../Navbar';


function ProductPage() {
  return (
    <>

      <Hero />
      <LeftImage
        imageURL="Images/kite.png"
        productName="Kite"
        productDiscription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the kite experience seamlessly on your android and iOS devices."
        tryDemo=""
        learMore=""
        googlePlay=""
        appStore="" />
      <RightImage
        imageURL="Images/console.png"
        productName="Console"
        productDescrption="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="" />
      <LeftImage
        imageURL="Images/coin.png"
        productName="Coin"
        productDiscription="Buy direct mutual funds online, commision-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learMore=""
        googlePlay=""
        appStore="" />
      <RightImage
        imageURL="Images/kiteconnect.png"
        productName="Kite Connect API"
        productDescrption="build powerful platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="" />
      <LeftImage
        imageURL="Images/varsity.png"
        productName="Varsity mobile"
        productDiscription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help on learn on the go."
        tryDemo=""
        learMore=""
        googlePlay=""
        appStore="" />

        <p className='text-center'>Want to know about our technology stack? Check out the TredStoc.tech blog.</p>
      <Univers />

    </>
  );
}
export default ProductPage;