import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './BuyActionWindow.css';
import GenerateContext from './GenerateContext';

const BuyActionWindow = ({ uid }) => {

    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);

    const handleBuyClick = () => {
        axios.post('http://localhost:8080/newOrder', {
            name: uid,
            qty: stockQuantity,
            price: stockPrice,
            mode: "BUY"
        });
        closeBuyWindow();
    }
    const { closeBuyWindow } = useContext(GenerateContext);

    const handleCancelClick = () => {
        closeBuyWindow();
    };

    return (
        <div className="containerClass" id="buy-window" draggable="true">

            <div className="regular-order">

                <div className="inputs">

                    <fieldset>
                        <legend>Qty</legend>
                        <input
                            type="number"
                            name="qty"
                            id="qty"
                            onChange={(e) => setStockQuantity(e.target.value)}
                            value={stockQuantity}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Price</legend>
                        <input
                            type="number"
                            name="price"
                            step="0.05"
                            onChange={(e) => setStockPrice(e.target.value)}
                            value={stockPrice}
                        />
                    </fieldset>

                </div>

                <div className="buttons">
                    <Link className='btn btn-blue' onClick={handleBuyClick}>Buy</Link>
                    <Link className='btn btn-grey' onClick={handleCancelClick}>
                        Cancel
                    </Link>
                </div>

            </div>

        </div>
    );
};

export default BuyActionWindow;