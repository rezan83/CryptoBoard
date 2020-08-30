import styled from "styled-components";
import {
    subtleBoxShadow,
    lightBlueBackground,
    cyanBoxShadow,
    redBoxShadow,
} from "./SharedStyles";

export const BlueCard = styled.div`
    ${subtleBoxShadow};
    ${lightBlueBackground};
    padding: 10px;
`;
export const BlueCardHover = styled(BlueCard)`
    &:hover {
        ${cyanBoxShadow}
    }
`;

export const RedCardHover = styled(BlueCardHover)`
    &:hover {
        ${redBoxShadow}
    }
`;
export const DisabledCardHover = styled(BlueCardHover)`
    opacity: 0.7;
    pointer-events: none;
`;

