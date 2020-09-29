import React from "react";
import dayjs from "dayjs";
import Navbar from "./Navbar";
import { Welcome, Dashboard, Settings } from "../Components";
import { AppContext } from "./AppProvider";
import {
    FETCH_COINS,
    RETRIEVE_STORAGE,
    FETCH_PRICES,
    FETCH_HISTORICAL,
} from "./actionTypes";
import "./App.css";
import cc from "cryptocompare";

cc.setApiKey(
    "ce863a115f37457c7746646a6d4c7a29fc1c247e4a6cebebfb0ad9dd59d71539"
);

const Core = ()=> {
    const {
        state: {
            page,
            favorites,
            showStar,
            toCurrency,
            allCurrency,
            timeRange,
            timeForm,
            timePoints,
        },
        dispatch,
    } = React.useContext(AppContext);

    const fetchCoins = React.useCallback(async () => {
        let rs = await cc.coinList();
        let coins = await rs.Data;
        dispatch({ type: FETCH_COINS, payload: coins });
    }, [dispatch]);

    const fetchPrices = React.useCallback(async () => {
        let prices = {};
        for (let i in favorites) {
            let price = await cc.priceFull(favorites[i], allCurrency);
            prices[favorites[i]] = price;
        }
        dispatch({ type: FETCH_PRICES, payload: prices });
    }, [dispatch, favorites,allCurrency]);

    const fetchHistorical = React.useCallback(async () => {
        let historical = [];
        let timeLabels = [];

        for (let point = timePoints; point >= 0; point--) {
            let price = await cc.priceHistorical(
                showStar,
                [toCurrency],
                dayjs().subtract(point, timeRange).toDate()
            );
            historical.push(price);
            timeLabels.push(
                dayjs().subtract(point, timeRange).format(timeForm)
            );
        }
        dispatch({
            type: FETCH_HISTORICAL,
            payload: { historical, timeLabels },
        });
    }, [dispatch, showStar, timePoints, toCurrency, timeRange]);

    React.useEffect(() => {
        let cryptoBoardData = JSON.parse(localStorage.getItem("cryptoBoard"));

        fetchCoins();

        fetchPrices();

        fetchHistorical();

        if (cryptoBoardData) {
            dispatch({
                type: RETRIEVE_STORAGE,
                payload: cryptoBoardData,
            });
        }
    }, [showStar, toCurrency, timePoints, timeRange]);

    return (
        <>
            <Navbar />
            <Welcome />
            {page === "Settings" ? <Settings /> : <Dashboard />}
        </>
    );
}


export default Core;
