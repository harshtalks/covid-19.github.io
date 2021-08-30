import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    

    .headerText{
        margin: 2rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h1{
            font-size: 3rem;
        }

        input{
            font-size: 2rem;
           
        }

        .btn{
            background-color: #85FFBD;
background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);

            padding: 0.4em 2em;
            color: black;
            border: none;
            border-radius: 0.25em;
            cursor: pointer;
            transition: all .25s ease-in;
            
            &:hover,&:active{
                background-position: center right;
                transform: translateY(-10px);
            }
            
        }

        .txt{
            background:#1c2121;
            color: white;
            outline: none;
            border: none;
            padding: 0.4em 1em;
            border-radius: .5em;
            margin-right: .7em;
        }

        @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: flex-start;

        form{
            margin: 1em 0;
        }

        .btn{
            margin-top: 1em;
        }
    }
    }

    
`

export const Content = styled.div`
display: grid;
    margin: 1em 0;
    margin-bottom: 4em;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;

    @media (max-width: 576px){
        display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}


    }
    `