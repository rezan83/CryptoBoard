import React from "react";
import {
    FETCH_COINS,
    RETRIEVE_STORAGE,
    SET_PAGE,
    ADD_FAVORITES,
} from "./actionTypes";

const initialState = {
    page: "Settings",
    firstVisit: true,
    coins: {},
    favorites: ["BTC","ETH", "LTC","XRP"],
};
export const AppContext = React.createContext();

function reducer(state, action) {
    const { type, payload } = action;
    switch (type) {
        case FETCH_COINS:
            return { ...state, coins: payload };
        case RETRIEVE_STORAGE:
            return { ...state, ...payload };
        case SET_PAGE:
            return { ...state, page: payload };
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
