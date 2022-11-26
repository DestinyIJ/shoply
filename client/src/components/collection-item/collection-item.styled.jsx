import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const ImageContainer = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    transition: 1s;
`

export const CollectionItemContainer = styled.div`
    width: 32%;
    display: flex;
    flex-direction: column;
    height: 50vh;
    align-items: center;
    position: relative;
    margin-bottom: 20px;
    &:hover ${ImageContainer} {
        opacity: 0.8;
    }
    
    @media (max-width: 760px) {
        width: 48%;
    }

    @media (max-width: 520px) {
        width: 100%;
    } 
`

export  const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`

export const NameContainer = styled.span`
    width: 90%;
    margin-bottom: 15px;
`

export const PriceContainer = styled.span`
    width: 10%;
`

export const CustomButtonContainer = styled(CustomButton)`
    opacity: 0.7;
    position: absolute;
    top: 70%;
`