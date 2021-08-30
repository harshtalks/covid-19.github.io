import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    

    :root{
        --card1: #43aa8b;
        --card2: #4361ee;
        --card3: #d62828;
        --card4: #52b788;
        --textLight: #adb5bd;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%;
    }

    body{
        font-family: 'Poppins', sans-serif;
        background: black;
        color: white;
    }
`
