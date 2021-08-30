import styled from "styled-components";

export const CardComponent = styled.div`

    width: 100%;
    height: fit-content;
    .swipeInfo{
        text-align: right;
        color: var(--textLight);
        visibility: hidden;
    }

    padding: 2em;
    border-radius: 1em;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    background: #232526;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


    h4{
        font-size: 2rem;
        text-transform: uppercase;
    }

    h2{
    font-size: 4rem;
    }

    @media (max-width: 576px){
    flex: 0 0  auto;
    .swipeInfo{
        visibility: visible;
    }
    }
`
