import React from "react";
import styled from "styled-components";

import { AppContext } from "../App/AppProvider";
import { ADD_FAVORITES, SHOW_STAR } from "../App/actionTypes";
import { Coin } from "./Coin";

const CoinsGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 5px;
    margin-top: 2vw;
`;

function CoinsGrid({ favored, dashboard }) {
    const {
        state: { coins, favorites, prices, currencey, found, query, page },
        dispatch,
    } = React.useContext(AppContext);
    const toggelFavorit = (coinKey) => {
        if (page === "Dashboard") {
            dispatch({ type: SHOW_STAR, payload: coinKey });
        } else {
            dispatch({ type: ADD_FAVORITES, payload: coinKey });
        }
    };
    const isFavorit = (coin) => favorites.includes(coin);
    const isFound = (coin) => found.includes(coin);
    const getCoinsList = () => {
        if (favored) {
            return Object.keys(coins).filter((c) => isFavorit(c));
        } else if (found.length) {
            return Object.keys(coins).filter((c) => isFound(c));
        }

        return Object.keys(coins).slice(0, 100);
    };
    let coinsList = getCoinsList();

    const coinsGrid = coinsList.map((coinKey) => {
        let coin = coins[coinKey];
        let price = isFavorit(coinKey) ? prices[coinKey] : null;
        let props = {
            coinKey,
            coin,
            toggelFavorit,
            favored,
            price,
            dashboard,
            disabled: isFavorit(coinKey),
        };
        return <Coin key={coin.Id} {...props} />;
    });
    const GridTitle = () => {
        let title = "All Coins, click to add to favorites:";
        if (favored) {
            title = "Your Favorit Coins:";
        } else if (found.length && query) {
            title = "Results:";
        } else if (!found.length && query) {
            title = "Sorry no Results, see all Coins:";
        }
        return <h3>{title}</h3>;
    };
    return (
        <>
            <GridTitle />
            <CoinsGridStyled>{coinsGrid}</CoinsGridStyled>
        </>
    );
}

export default CoinsGrid;
