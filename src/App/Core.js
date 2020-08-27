import React from "react";
import Navbar from "./Navbar";
import { Welcome, OkButton } from "../Settings";
import { AppContext } from "./AppProvider";
import { FETCH_COINS, RETRIEVE_STORAGE } from "./actionTypes";
import cc from "cryptocompare";
import "./App.css";

cc.setApiKey(
    "ce863a115f37457c7746646a6d4c7a29fc1c247e4a6cebebfb0ad9dd59d71539"
);

function Core() {
    const { state, dispatch } = React.useContext(AppContext);

    const fetchCoins = async () => {
        let rs = await cc.coinList();
        let data = await rs.Data;
        dispatch({ type: FETCH_COINS, payload: data });
    };

    React.useEffect(() => {
        let cryptoBoardData = JSON.parse(localStorage.getItem("cryptoBoard"));
        fetchCoins();

        if (cryptoBoardData) {
            dispatch({ type: RETRIEVE_STORAGE, payload: cryptoBoardData });
        }
    }, []);

    return (
        <>
            <Navbar />
            <Welcome />
            <OkButton />
        </>
    );
}

export default Core;
