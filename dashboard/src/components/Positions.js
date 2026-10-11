import React,{useState, useEffect} from 'react';
import axios from 'axios';


function Positions() {

    const [positions, setPositions] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8080/allPositions')
            .then(response => {
                setPositions(response.data);
            })
            .catch(error => {
                console.error('Error fetching positions:', error);
            });
    },[])
    return ( 
        <>
                    <h2 className="title">
                        Positions ({positions.length})
                    </h2>
        
                    <div className="order-table">
                        <table>
                            <thead>
                                <tr>
                                   
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Average Price</th>
                                    <th>LTP</th>
                                    
                                    <th>Profit/Loss</th>
                                    
                                    <th>Day chg</th>
                                </tr>
                            </thead>
                            <tbody>
                                {positions.map((position) => {
                                    const currValue = position.qty * position.price;
                                    const isProfit = currValue - position.qty * position.avg >=0.0;
                                    const profClass = isProfit ? "profit" : "loss";
                                    const dayClass = position.isLoss? "loss" : "profit";
                                    return (                                  
                                    <tr key={position._id}>
                                        
                                        <td>{position.name}</td>
                                        <td>{position.qty}</td>
                                        <td>{position.avg.toFixed(2)}</td>
                                        <td>{position.price.toFixed(2)}</td>
                                        <td className={profClass}>{(currValue - position.qty * position.avg).toFixed(2)}</td>  
                                        <td className={dayClass}>{position.day}</td>
                                 </tr>
                                    );
                                    })}
                            </tbody>
                        </table>
                    </div>
        </>
        );
}

export default Positions;