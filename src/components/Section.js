import React from 'react'
import styled from "styled-components"

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
  return (
    <Wrap bgImage = {backgroundImg}>
        <ItemText>
            <h1>{ title }</h1>
            <p>{ description }</p>
        </ItemText>
        <Buttons>
            <ButtonGroup>
                <LeftButton>{ leftBtnText }</LeftButton>
                {/* only display right button if given some text */}
                { rightBtnText &&
                    <RightButton>{ rightBtnText }</RightButton>
                }
            </ButtonGroup>
            <DownArrow src='/images/down-arrow.svg' />
        </Buttons>
    </Wrap>  
    )
}

export default Section

const Wrap = styled.div`
    width: 100vh;
    height: 100vh;
    // background: orange;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between; // vertical
    align-items: center; // horizontal
    background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    `

const Buttons = styled.div`
    // border: 2px solid red;
    display: flex;
    flex-direction: column;
    `

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    `

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;

`

const RightButton = styled(LeftButton)`
    background: white;
    color: black;
    opacity: 0.65;
    `

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 2s;
    `