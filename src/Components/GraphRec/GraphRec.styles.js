import styled from "styled-components";

export const Content = styled.div`
    padding: 2em;

    
   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background: #1c2121;
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 10vh;
        h2{
        font-size: 3rem;
        text-transform: uppercase;
    }
    select{
            font-size: 1.5rem;
            padding: .2em 1em;
            border-radius: .5em;
            background-color: transparent;
            color: white;
            outline: none;
        }
    }


    @media (max-width: 768px){
      div{
          flex-direction: column;
      }
    }
`