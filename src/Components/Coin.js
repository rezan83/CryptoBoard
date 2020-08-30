import React from "react";
import styled from "styled-components";
import {
    BlueCardHover,
    RedCardHover,
    DisabledCardHover,
} from "../Shared/CardHover";

const CoinCard = styled.div`
    display: flex;
    justify-content: space-between;
`;
const CoinInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const CoinImage = styled.img`
    width: 25%;
    min-width: 25px;
    height: 25%;
    min-height: 25px;
`;
const Coin = ({ coin, coinKey, toggelFavorit, favored, selected }) => {
    let CardHover = BlueCardHover;
    if (favored) {
        CardHover = RedCardHover;
    } else if (!favored && selected) {
        CardHover = DisabledCardHover;
    }

    return (
        <CardHover onClick={() => toggelFavorit(coinKey)}>
            <CoinCard>
                <CoinInfo>
                    <div>{coin.CoinName}</div>
                    <div>{coin.Symbol}</div>
                </CoinInfo>
                <CoinImage
                    src={`https://www.cryptocompare.com${coin.ImageUrl}`}
                    alt={coin.CoinName}
                />
            </CoinCard>
        </CardHover>
    );
};

export default Coin;
