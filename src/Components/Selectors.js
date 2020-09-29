import React from 'react'
import styled from "styled-components"
import { AppContext } from "../App/AppProvider";
import { SET_CURRENCY, SET_TIMERANGE } from "../App/actionTypes";

let Selector = styled.div`
    select {
        font-size: calc(0.7em);
        cursor: pointer;
        background-color: transparent;
        color: #fff;
    }
`;
export const SelectToCurrency = () => {
    const { state, dispatch } = React.useContext(AppContext);
    const changeCurrency = (e) => {
        let toCurrency = e.target.value;
        dispatch({ type: SET_CURRENCY, payload: toCurrency });
    };
    return (
        <Selector>
            <select
                name="toCurrency"
                value={state.toCurrency}
                onChange={(e) => changeCurrency(e)}
            >
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="BTC">BTC</option>
            </select>
        </Selector>
    );
};

export const SelectTimeRange = () => {
    const { state, dispatch } = React.useContext(AppContext);
    const changeTimeRange = (e) => {
        let timeRange = e.target.value;
        dispatch({ type: SET_TIMERANGE, payload: timeRange });
    };

    return (
        <Selector>
            <select
                name="toCurrency"
                value={state.timeRange}
                onChange={(e) => changeTimeRange(e)}
            >
                <option value="months">months</option>
                <option value="days">days</option>
                <option value="hours">hours</option>
            </select>
        </Selector>
    );
};
