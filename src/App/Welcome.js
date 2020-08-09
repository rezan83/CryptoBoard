import React from 'react'
import styled from 'styled-components'

let Title = styled.div`
    margin: 10px;
    text-transform: capitalize;
`

export default function Welcom(params) {
    return (
        <Title>
            <h1>Welcome to crypto board</h1>
        </Title>
    );
}