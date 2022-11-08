import styled from "styled-components";

export const SignInAndSignUpContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 30px auto;
    gap: 40px;

    @media screen and (max-width: 768px ) {
        flex-direction: column-reverse;
    }
`