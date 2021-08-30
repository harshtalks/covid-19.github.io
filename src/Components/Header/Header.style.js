import styled from "styled-components";

export const Section = styled.div`
    margin-top: 8rem;
    padding-top: 5rem;
`

export const Content = styled.div`

    display: flex;
    justify-content: space-between;

    img{
        width: 50px;
    }
    h1{
        font-size: 3rem;
        font-weight: 500;
        margin-bottom: .25em;
    }

    p{
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--textLight);
        letter-spacing: .4em;
        text-transform: uppercase;
    }

    @media screen and (max-width: 768px){
        flex-direction: column;

        img{
            margin: 2em 0;
        }
    }
`