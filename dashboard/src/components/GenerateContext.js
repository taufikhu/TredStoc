import React, { useState } from 'react';
import BuyActionWindow from './BuyActionWindow';

const GenerateContext = React.createContext({
    openBuyWindow: (uid) => {},
    closeBuyWindow: () => {},
});

export const GeneralContextProvider = ({children}) => {

    const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
    const [selectStockUID, setSelectStockUID] = useState("");

    const handleOpenBuyWindow = (uid) => {
        setIsBuyWindowOpen(true);
        setSelectStockUID(uid);
    };

    const handleCloseBuyWindow = () => {
        setIsBuyWindowOpen(false);
        setSelectStockUID("");
    };

    return (
        <GenerateContext.Provider
            value={{
                openBuyWindow: handleOpenBuyWindow,
                closeBuyWindow: handleCloseBuyWindow,
            }}
        >
            {children}

            {isBuyWindowOpen && (
                <BuyActionWindow
                    uid={selectStockUID}
                    closeBuyWindow={handleCloseBuyWindow}
                />
            )}
        </GenerateContext.Provider>
    );
};

export default GenerateContext;