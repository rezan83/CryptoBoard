import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";
import { ADD_FAVORITES } from "../App/actionTypes";
import Coin from "./Coin";

const CoinsGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 5px;
    margin-top: 2vw;
`;

export default function CoinsGrid({ favored }) {
    const {
        state: { coins, favorites },
        dispatch,
    } = React.useContext(AppContext);
    const toggelFavorit = (coinKey) => {
        dispatch({ type: ADD_FAVORITES, payload: coinKey });
    };

    const getCoins = () => {
        if (favored) {
            return Object.keys(coins).filter((c)=> favorites.includes(c))
        }
        return Object.keys(coins).slice(0, 100);
    };
    let coinsList = getCoins();

    const coinsGrid = coinsList.map((coinKey) => {
        let props = {
            coinKey,
            coin: coins[coinKey],
            toggelFavorit,
            favored,
            selected: favorites.includes(coinKey),
        };
        return <Coin key={coinKey} {...props} />;
    });

    return <CoinsGridStyled>{coinsGrid}</CoinsGridStyled>;
}
