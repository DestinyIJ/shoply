import styled, { css } from "styled-components";
import { Link } from "react-router-dom";


export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 25px;
`

export const LogoContainer = styled(Link)`
    height: 100%;
    min-width: 70px;
`

export const OptionsContainer = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const optionContainerStyles = css`
    cursor: pointer;
    padding: 10px 8px;
    font-size: 0.8rem;
`

export const OptionLink = styled(Link)`
    ${optionContainerStyles}
`

export const OptionDiv = styled.div`
    ${optionContainerStyles}
`

