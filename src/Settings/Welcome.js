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
        <Title>{state.firstVisit && <h1>Welcome to crypto board</h1>}</Title>
    );
}
