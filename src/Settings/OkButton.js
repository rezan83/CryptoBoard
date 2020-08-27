import React from "react";
import { AppContext } from "../App/AppProvider";
import { SET_STORAGE } from "../App/actionTypes";

export function OkButton() {
    const { state, dispatch } = React.useContext(AppContext);

    const setSettings = () => {
        let newSettings = { ...state, page: "Dashboard", firstVisit: false };
        dispatch({ type: SET_STORAGE, payload: newSettings });
        localStorage.setItem("cryptoBoard", JSON.stringify(newSettings));
    };
    return <button onClick={setSettings}>Confirm Favorit</button>;
}
