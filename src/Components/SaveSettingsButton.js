import React from "react";
import styled from "styled-components";

import { AppContext } from "../App/AppProvider";
import { SET_STORAGE } from "../App/actionTypes";
import {
    color3,
    fontSize1,
    cyanBoxShadow,
} from "../Shared/SharedStyles.js";

let CenterDive = styled.div`
    display: grid;
    place-items: center;
`;
let OkButtonStyled = styled.div`
    background-color: transparent;
    margin: 20px;
    padding: 5px;
    ${fontSize1};
    color: ${color3};
    cursor: pointer;
    &:hover {
        ${cyanBoxShadow}
    }
`;
export function SaveSettingsButton() {
    const { state, dispatch } = React.useContext(AppContext);

    const setSettings = () => {
        let newSettings = {
            favorites: state.favorites,
            page: "Dashboard",
            firstVisit: false,
        };
        dispatch({ type: SET_STORAGE, payload: newSettings });
        localStorage.setItem("cryptoBoard", JSON.stringify(newSettings));
    };
    return (
        <CenterDive>
            <OkButtonStyled onClick={setSettings}>
                Confirm Favorites
            </OkButtonStyled>
        </CenterDive>
    );
}
