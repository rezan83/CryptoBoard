import React from "react";
import Navbar from "./Navbar";
import { Welcome, SaveSettingsButton } from "../Components";
import styled from "styled-components"
import { AppContext } from "./AppProvider";
import { FETCH_COINS, RETRIEVE_STORAGE } from "./actionTypes";
import "./App.css";
import cc from "cryptocompare";

cc.setApiKey(
    "ce863a115f37457c7746646a6d4c7a29fc1c247e4a6cebebfb0ad9dd59d71539"
);
const CoinsGrid = React.lazy(() => import("../Components/CoinsGrid"));
const Loading = <h1>loading...</h1>;

let Seperator = styled.div`
    height: 5vw;

`;
function Core() {
    const { state, dispatch } = React.useContext(AppContext);

    React.useEffect(() => {
        let cryptoBoardData = JSON.parse(localStorage.getItem("cryptoBoard"));
        const fetchCoins = async () => {
            let rs = await cc.coinList();
            let data = await rs.Data;
            dispatch({ type: FETCH_COINS, payload: data });
        };

        fetchCoins();

        if (cryptoBoardData) {
            dispatch({
                type: RETRIEVE_STORAGE,
                payload: cryptoBoardData,
            });
        }
    }, [dispatch]);
    return (
        <>
            <Navbar />
            <Welcome />
            <h3>Favorites</h3>
            <React.Suspense fallback={Loading}>
                <CoinsGrid favored />
            </React.Suspense>
            {(state.page === "Settings" && <SaveSettingsButton />) || (
                <Seperator />
            )}
            <hr />
            <h3>All Coins</h3>
            <React.Suspense fallback={Loading}>
                <CoinsGrid />
            </React.Suspense>
        </>
    );
}

export default Core;
