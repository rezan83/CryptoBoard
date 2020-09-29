import React  from "react";
import styled, { css } from "styled-components";
import { AppContext } from "./AppProvider";
import { SET_PAGE, SET_CURRENCY, SET_TIMERANGE } from "../App/actionTypes";

let NavHorizontal = styled.div`
    display: grid;
    grid-template-columns: minmax(100px, 1fr) 50px 50px 50px;
    grid-gap: 5vw;
    margin-bottom: 30px;
`;

let Logo = styled.div`
    font-size: calc(1.1em + 1vw);
`;

let LinkActive = styled.div`
    justify-self: right;
    font-size: calc(1em + .5vw);
    cursor: pointer;
    ${({ active }) =>
        active &&
        css`
            text-shadow: 0 0 20px #00d0ff, 5px 5px 5px #69eaff;
        `}
`;


const StyledLink = ({ name, active }) => {
    const { state, dispatch } = React.useContext(AppContext);
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
