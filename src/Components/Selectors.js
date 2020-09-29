import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";
import {
    SET_CURRENCY,
    SET_TIMERANGE,
    SET_TIMEPOINTS,
} from "../App/actionTypes";

let Selector = styled.div`
margin-right: 10px;
    select {
        font-size: calc(0.7em);
        cursor: pointer;
        background-color: transparent;
        color: #fff;
    }
`;

let Selectors = styled.div`
    display: flex;
    
`;
 const SelectToCurrency = () => {
    const { state, dispatch } = React.useContext(AppContext);
    const changeCurrency = (e) => {
        let toCurrency = e.target.value;
        dispatch({ type: SET_CURRENCY, payload: toCurrency });
    };
    return (
        <Selector>
            Currency:
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

 
 const SelectTimePoints = () => {
    const { state, dispatch } = React.useContext(AppContext);
    const changeTimePoints = (e) => {
        let timePoints = e.target.value;
        dispatch({ type: SET_TIMEPOINTS, payload: timePoints });
    };

    return (
        <Selector>
            Time:
            <select
                name="timePoints"
                value={state.timePoints}
                onChange={(e) => changeTimePoints(e)}
            >
                <option value="3">3</option>
                <option value="6">6</option>
                <option value="9">9</option>
                <option value="12">12</option>
            </select>
            
        </Selector>
    );
};

const SelectTimeRange = () => {
    const { state, dispatch } = React.useContext(AppContext);
    const changeTimeRange = (e) => {
        let timeRange = e.target.value;
        dispatch({ type: SET_TIMERANGE, payload: timeRange });
    };

    return (
        <Selector>
            <select
                name="timeRange"
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

export const SelectorGroup = () => {
    return (
        <Selectors>
            <SelectToCurrency />
            <SelectTimePoints />
            <SelectTimeRange />
        </Selectors>
    );
};
