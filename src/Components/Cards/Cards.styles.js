import styled from "styled-components";

export const Section = styled.div`
    margin: 4rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2em;

    @media screen and (max-width: 800px){
        grid-template-columns: 1fr;
    }
`