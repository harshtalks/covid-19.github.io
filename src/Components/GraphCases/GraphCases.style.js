import styled from "styled-components";

export const Content = styled.div`
    padding: 2em;

    
   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background: #1c2121;
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: fit-content;
        

        .textBar{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            h2{
        font-size: 3rem;
        text-transform: uppercase;
        margin-bottom: .5em;
        }
        p{
            font-size: 1.5em;
            color: var(--textLight);
        }
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