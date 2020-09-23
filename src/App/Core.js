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

function Core() {
    const {
        state: { page, favorites, showStar, toCurrency, timeRange, timePoints },
        dispatch,
    } = React.useContext(AppContext);

    const memoizedFetchCoins = React.useCallback(
        async function fetchCoins() {
            let rs = await cc.coinList();
            let coins = await rs.Data;
            dispatch({ type: FETCH_COINS, payload: coins });
        },
        [dispatch]
    );

    const memoizedFetchPrices = React.useCallback(
        async function fetchPrices() {
            let prices = {};
            for (let i in favorites) {
                let price = await cc.priceFull(favorites[i], toCurrency);
                prices[favorites[i]] = price;
            }
            dispatch({ type: FETCH_PRICES, payload: prices });
        },
        [dispatch, favorites, toCurrency]
    );

    const memoizedFetchHistorical = React.useCallback(
        async function fetchHistorical() {
            let historical = [];
            let timeLabels = [];
            let timeForm = "MMM";
            if(timeRange=== "days"){
                timeForm = "dd"
            }else if (timeRange === "hours"){
                timeForm = "HH";
            }
                for (let point = timePoints; point > 0; point--) {
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
        },
        [dispatch, showStar, timePoints, timeRange, toCurrency]
    );

    React.useEffect(() => {
        let cryptoBoardData = JSON.parse(localStorage.getItem("cryptoBoard"));

        memoizedFetchCoins();

        memoizedFetchPrices();

        memoizedFetchHistorical();

        if (cryptoBoardData) {
            dispatch({
                type: RETRIEVE_STORAGE,
                payload: cryptoBoardData,
            });
        }
    }, [dispatch, showStar]);

    return (
        <>
            {console.log(dayjs().subtract(1, "months").format('MMM'))}
            <Navbar />
            <Welcome />

            {page === "Settings" ? <Settings /> : <Dashboard />}
        </>
    );
}

export default Core;
