import React from "react";
import styled from "styled-components";
import { SaveSettingsButton, CoinsSearch, Coin, Historic } from "./index";
import { AppContext } from "../App/AppProvider";
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
    height: 90vw;
    margin: auto;
    display: grid;
    grid-template-rows: 20% 1fr;
`;

function Dashboard() {
    const { state } = React.useContext(AppContext);
    let coinKey = state.showStar;
    let coin = state.coins[coinKey];
    let price = state.prices[coinKey];

    return (
        <>
            <React.Suspense fallback={Fallback}>
                <CoinsGrid favored dashboard />
            </React.Suspense>
            <hr />
            <Seperator />
            <Container>
                <Coin
                    {...{
                        coin,
                        coinKey,
                        showStar: state.showStar,
                        price,
                    }}
                />

                <Historic />
            </Container>
        </>
    );
}

export { Dashboard };

function Settings() {
    return (
        <>
            <React.Suspense fallback={Fallback}>
                <CoinsGrid favored />
            </React.Suspense>

            <SaveSettingsButton />
            <hr />
            <CoinsSearch />

            <React.Suspense fallback={Fallback}>
                <CoinsGrid />
            </React.Suspense>
        </>
    );
}

export { Settings };
