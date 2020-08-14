// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledCharacters = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    margin: 10% auto;
    /*border: 1px solid black;*/
    padding: 5%

    width: 50%;
    color: ${props => props.color}



`

export default function Character({name, birth}) {
    return <StyledCharacters color='white'>
            <p> {name} </p> 
            <p> {birth} </p>
    </StyledCharacters>
}