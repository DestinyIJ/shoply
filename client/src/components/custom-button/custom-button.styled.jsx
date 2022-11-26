import styled from "styled-components";

export const CustomButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 10px 0 10px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;

    background-color: ${props =>
        props.inverted ? "white"
        : props.isGoogleSignIn ? "#4285f4"
        : "black"
    };

    
    
    
    color: ${props =>
        props.inverted ? "black"
        : props.isGoogleSignIn ? "white"
        : "white"
    };
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: ${props =>
        props.inverted ? "1px solid black"
        : props.isGoogleSignIn ? "none"
        : "none"
    };

    transition: ease-in-out;

    &:hover {
        background-color: ${props =>
            props.inverted ? "black"
            : props.isGoogleSignIn ? "#095fe7"
            : "white"
        };
        color: ${props =>
            props.inverted ? "white"
            : props.isGoogleSignIn ? "white"
            : "black"
        };
        border: ${props =>
            props.inverted ? "1px solid black"
            : props.isGoogleSignIn ? "none"
            : "1px solid black"
        };
    }

    &:active {
        transform: scaleX(1.2);
    }

`