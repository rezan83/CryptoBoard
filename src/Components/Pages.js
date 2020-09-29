import React from "react";
import styled from "styled-components";
import {
    SaveSettingsButton,
    CoinsSearch,
    Historic,
} from "./index";
import { SelectorGroup } from "./Selectors";
import loading from "./loading.gif";

const CoinsGrid = React.lazy(() => import("./CoinsGrid"));

const Loading = styled.div`
    display: grid;
    place-items: center;
    grid-column: 3;
`;
const Fallback = () => {
    return (
        <Loading>
            <img src={loading} alt="loading" />
        </Loading>
    );
};

let Seperator = styled.div`
    height: 5vw;
`;
let Container = styled.div`
    width: 70vw;
    height: 30vw;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 10% 1fr;
`;


function Dashboard() {
    return (
        <>
            <React.Suspense fallback={<Fallback />}>
                <CoinsGrid favored dashboard />
            </React.Suspense>
            <hr />
            <Seperator />
            <Container>
              
                    <SelectorGroup />
                  
             
                <Historic />
            </Container>
        </>
    );
}

export { Dashboard };

function Settings() {
    return (
        <>
            <React.Suspense fallback={<Fallback />}>
                <CoinsGrid favored />
            </React.Suspense>

            <SaveSettingsButton />
            <hr />
            <CoinsSearch />

            <React.Suspense fallback={<Fallback />}>
                <CoinsGrid />
            </React.Suspense>
        </>
    );
}

export { Settings };
