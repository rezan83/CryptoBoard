import React from "react";
import {
    FETCH_COINS,
    RETRIEVE_STORAGE,
    SET_PAGE,
    ADD_FAVORITES,
    SEARCH,
    QUERY,
    SHOW_STAR,
    FETCH_PRICES,
    FETCH_HISTORICAL,
} from "./actionTypes";

const initialState = {
    page: "Settings",
    firstVisit: true,
    coins: {},
    favorites: ["BTC", "ETH"],
    prices: {},
    toCurrency: "EUR",
    historical: [],
    timeLabels: [],
    timeRange: "months",
    timePoints: 10,
    showStar: "BTC",
    query: "",
    found: [],
};
export const AppContext = React.createContext();

function reducer(state, action) {
    const { type, payload } = action;
    switch (type) {
        case FETCH_COINS:
            return { ...state, coins: payload };
        case FETCH_PRICES:
            return { ...state, prices: payload };
        case FETCH_HISTORICAL:
            return { ...state, historical: payload.historical, timeLabels:payload.timeLabels };
        case RETRIEVE_STORAGE:
            return { ...state, ...payload };
        case SET_PAGE:
            return { ...state, page: payload };
        case QUERY:
            return { ...state, query: payload };

        case SEARCH:
            let coins = Object.keys(state.coins);
            let found = state.query
                ? coins.filter(
                      (coin) =>
                          state.coins[coin].CoinName.toLowerCase().includes(
                              state.query
                          ) ||
                          state.coins[coin].Symbol.toLowerCase().includes(
                              state.query
                          )
                  )
                : [];
            return { ...state, found: found };
        case ADD_FAVORITES:
            const isFavorit = (payload) => state.favorites.includes(payload);

            let newFavorites = [];
            if (isFavorit(payload)) {
                newFavorites = state.favorites.filter(
                    (coin) => coin !== payload
                );
            } else {
                newFavorites = [...state.favorites, payload];
            }
            return { ...state, favorites: newFavorites };
        case SHOW_STAR:
            return { ...state, showStar: payload };
        default:
            return state;
    }
}
export const AppProvider = (props) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {props.children}
        </AppContext.Provider>
    );
};
