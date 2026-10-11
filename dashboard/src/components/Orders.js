import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Orders() {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/allOrder')
            .then(response => {
                setOrders(response.data);
            })
            .catch(error => {
                console.error('Error fetching Orders:', error);
            });
    }, [])
    return (
        <div className="order-table">
            <table>
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Mode</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => {
                        return (
                            <tr key={order._id}>

                                <td>{order.name}</td>
                                <td>{order.qty}</td>
                                <td>{order.price}</td>
                                <td>{order.mode}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Orders;