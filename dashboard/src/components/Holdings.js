import React, { useState, useEffect } from 'react';
import { VerticalChart } from './VerticalChart';

import axios from 'axios';


function Holdings() {

    const [holdings, setHoldings] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/allholdings')
            .then(response => {
                console.log('Holdings fetched successfully:', response.data);
                setHoldings(response.data);
            })
            .catch(error => {
                console.error('Error fetching holdings:', error);
            });
    }, []);
    
    const labels = holdings.map((subArray) => subArray['name']);

    const data = {
        labels,
        datasets: [
            {
                label: 'stock Price',
                data: holdings.map((stock) => stock.price ),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return (
        <>
            <h2 className="title">
                Holdings ({holdings.length})
            </h2>

            <div className="order-table">
                <table>
                    <thead>
                        <tr>
                            <th className="border-right">Instrument</th>
                            <th>Quantity</th>
                            <th>Average Price</th>
                            <th>LTP</th>
                            <th>Current Price</th>
                            <th>Profit/Loss</th>
                            <th>Net Change</th>
                            <th>Day chg</th>
                        </tr>
                    </thead>

                    <tbody>
                        {holdings.map((holding) => {

                            const curValue =
                                holding.price * holding.qty;

                            const profitLoss =
                                curValue -
                                holding.avg * holding.qty;

                            const profitLossClass =
                                profitLoss >= 0.0 ? "profit" : "loss";


                            const dayChangeClass =
                                holding.isLoss ? "loss" : "profit";

                            return (
                                <tr key={holding._id}>
                                    <td className="border-right">
                                        {holding.name}
                                    </td>

                                    <td>{holding.qty}</td>

                                    <td>{holding.avg}</td>

                                    <td>{curValue}</td>

                                    <td>{holding.price}</td>

                                    <td className={profitLossClass}>
                                        {profitLoss}
                                    </td>

                                    <td className={profitLossClass}>{holding.net}</td>

                                    <td className={dayChangeClass}>
                                        {holding.day}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <VerticalChart data={data} />
        </>
    );
}

export default Holdings;
