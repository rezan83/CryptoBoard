import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { AppContext } from "./AppProvider";
import { SET_PAGE } from "../App/actionTypes";

let NavHorizontal = styled.div`
    display: grid;
    grid-template-columns: minmax(150px, 1fr) 100px 100px;
    margin-bottom: 30px;
`;

let Logo = styled.div`
    font-size: 1.4em;
    margin-bottom: 30px;
`;

let LinkActive = styled.div`
    cursor: pointer;
    ${({ active }) =>
        active &&
        css`
            text-shadow: 0 0 20px #00d0ff, 5px 5px 5px #69eaff;
        `}
`;

const StyledLink = ({ name, active }) => {
    const { state, dispatch } = useContext(AppContext);
    return (
        <LinkActive
            active={name === state.page}
            onClick={() => dispatch({ type: SET_PAGE, payload: name })}
        >
            {name}
        </LinkActive>
    );
};

export default function Navbar() {
    return (
        <NavHorizontal>
            <Logo>_CryptoBoard_</Logo>
            <StyledLink name={"Dashboard"} />
            <StyledLink name={"Settings"} />
        </NavHorizontal>
    );
}
