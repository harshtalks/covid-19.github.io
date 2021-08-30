import styled from "styled-components";

export const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2em;
    height: fit-content;
    width: 100%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background: #1c2121;
    border-radius: 1em;

    .inner{
        display: flex;
        justify-content: space-between;

        img{
            width: 50px;
        }

    }

    h2{
        font-size: 4rem;
        font-weight: 700;
        margin: .25em 0;
    }

    p{
        font-size: 1.5rem;
        text-transform: uppercase;
        color: #6f7272;
        line-height: 2em;
    }

    span{
        padding: .2em 1em;
        margin-right: .25em;
        width: fit-content;
        background: ${props => props.color};
        border-radius: .5em;
        color: white;
        
    }
    h5{
        font-size: 2rem;
        font-weight: 600;
        text-transform: uppercase;
        color: var(--textLight);
    }

    

`