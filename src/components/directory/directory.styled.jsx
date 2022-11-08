import styled from "styled-components";

export const DirectoryContainer = styled.div`
    width: 85vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`