import React from "react";
import styled from "styled-components";
import {
    BlueCardHover,
    RedCardHover,
    DisabledCardHover,
    StarMe,
} from "../Shared/CardHover";

const CoinCard = styled.div`
    display: flex;
    justify-content: space-around;
    overflow: hidden;
    padding: 1%;
`;

const CoinInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: ${(props) => (props.showStar ? "calc(.5em + 1vw)" : "100%")};
`;
const CoinImage = styled.img`
    width: 20%;
    min-width: 25px;
    height: 20%;
    min-height: 25px;
    padding: 1%;
`;

function Coin({
    coin,
    coinKey,
    toggelFavorit = false,
    favored = false,
    price = null,
    disabled = false,
    showStar = false,
    dashboard = false,
    toCurrencey = null,
}) {
    let CardHover = BlueCardHover;
    if (favored && !dashboard) {
        CardHover = RedCardHover;
    } else if (!favored && disabled) {
        CardHover = DisabledCardHover;
    } else if (coinKey === showStar) {
        CardHover = StarMe;
    }
    return (
        <CardHover
            onClick={toggelFavorit ? () => toggelFavorit(coinKey) : undefined}
        >
            <CoinCard>
                <CoinInfo {...{ showStar }}>
                    <div>{coin && coin.CoinName}</div>
                    <div>{coin && coin.Symbol}</div>
                    {price ? (
                        <div>
                            {toCurrencey && price[coinKey][toCurrencey].PRICE}{" "}
                            {toCurrencey}
                        </div>
                    ) : null}
                </CoinInfo>
                {favored && (
                    <CoinImage
                        src={`https://www.cryptocompare.com${
                            coin && coin.ImageUrl
                        }`}
                        alt={coin && coin.CoinName}
                    />
                )}
            </CoinCard>
        </CardHover>
    );
}

export { Coin };
