import React, { useContext } from "react";
import styled, {css} from 'styled-components'
import {AppContext} from "./AppProvider";


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
    ${({active}) =>
        active &&
        css`
            text-shadow: 0px 5px 10px #579aff;
        `}
`;

const StyledLink = ({name, active})=>{
    const [page, set_page] = useContext(AppContext);
    return (
        <LinkActive active={name === page} onClick={()=>set_page(name)}>
            {name}
        </LinkActive>
    );
}

export default function Navbar() {
    return (
        <NavHorizontal>

            <Logo>_CryptoBoard_</Logo>
            <StyledLink name={"Dashboard"}  />
            <StyledLink name={"Settings"}  />

        </NavHorizontal>
    );
}

