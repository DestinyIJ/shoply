import styled from "styled-components";

export const CartDropdowncontainer = styled.div`
    position: absolute;
    width: 280px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 8%;
    z-index: 5;
`

export const CartItemsContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`

export const EmptyMessageContainer = styled.span`
    font-size: 18px;
    margin: 45% auto;
    text-align: center;
`