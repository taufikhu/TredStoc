import React from 'react';
import App from './App';
import Fund from  './Funds';
import Holdings from './Holdings';
import Orders from './Orders';
import Positions from './Positions';
import Summary from './Summary';
import WatchList from './WatchList';
import { Routes, Route } from 'react-router-dom';
import { GeneralContextProvider } from './GenerateContext';

function Dashboard() {
    return ( 
        <div className='dashboard-container'>
            <GeneralContextProvider>
                <WatchList/>
            </GeneralContextProvider>
            
            <div className='content'>
                <Routes>
                    <Route path="/" element={<Summary/>}/>
                    <Route path='orders' element={<Orders/>}/>
                    <Route path="holding" element={<Holdings/>}/>
                    <Route path='position' element={<Positions/>}/>
                    <Route path="fund" element={<Fund/>}/>
                    <Route path='app' element={<App/>}/>
                </Routes>
            </div>
        </div>
     );
}

export default Dashboard;

