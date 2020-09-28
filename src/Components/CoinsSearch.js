import React from "react";
import styled from "styled-components";

import { SEARCH, QUERY } from "../App/actionTypes";
import { AppContext } from "../App//AppProvider";

const InputIcon = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    color: #00edf9;
    margin: 3px;
    z-index: -1;
`;

const Form = styled.form`
    position: relative;
    display: flex;
    margin-bottom: 50px;
    width: 1vw;
`;
const Input = styled.input`
    background-color: rgba(255, 255, 255, 0.5);
    width: 1vw;
    height: 6vh;
    border-radius: 30px;
    border-color: #00edf9;
    border-width: 0;
    padding-left: 25px;
    transition: all 1s;
    &:focus {
        width: 30vw;
        border-radius: 5px;
    }
`;
export function CoinsSearch() {
    const { dispatch, state } = React.useContext(AppContext);

    const handelChange = (e) => {
        let query = e.target.value.toLowerCase();
        dispatch({ type: QUERY, payload: query });

        setTimeout(() => {
            dispatch({ type: SEARCH });
        }, 500);
    };

    return (
        <div>
            <Form>
                <Input
                    type="text"
                    name="search"
                    value={state.query}
                    onChange={handelChange}
                />
                <InputIcon>
                    <i className="material-icons">search</i>
                </InputIcon>
            </Form>
        </div>
    );
}
