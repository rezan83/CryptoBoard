import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";

let Title = styled.div`
    margin: 10px;
    text-transform: capitalize;
`;

export function Welcome(params) {
    const { state } = React.useContext(AppContext);
    return (
        <Title>
            {state.firstVisit && (
                <h3>
                    Welcome to CryptoBoard!, it's your first visit, you can see
                    a specific chart in dashboard and change your settings in
                    settings page.
                </h3>
            )}
        </Title>
    );
}
