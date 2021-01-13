import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin:0%;
        padding:0%;
        box-sizing: border-box;
    }
    html{
        @media (max-width:1700px){
            font-size: 80%;
        }
        @media (max-width:1300px){
            font-size: 75%;
        }
        @media (max-width:900px){
            font-size: 70%;
        }
        @media (max-width:520px){
            font-size: 60%;
        }
    }
    body{
        background-color: #0b0c10;
        overflow-x: hidden;
        font-family: 'Montserrat', sans-serif;
    }
    button{
        font-weight: 700;
        font-size: 2rem;
        cursor: pointer;
        padding: 0.5rem 1.5rem;
        border: 2px solid #66fcf1;
        border-radius: 5px;
        background: transparent;
        color:white;
        transition: all 0.7s ease;
        margin: 1rem 0rem;
        &:hover{
            background-color: #66fcf1;
            color: #000;
        }
        a{text-decoration: none;
            color: #fff;
        }
        @media (max-width:1300px){
            a{text-decoration: none;
                font-size: 2rem;
            text-transform: capitalize;
            color: #fff;
        }
           
        }
    }
    h2{
        font-weight: 500;
        line-height: 100%;
        font-size:4rem;
    }
    h3{
        color: white;
        font-size: 2rem
    }
    h4{
        font-weight: bold;
        font-size:2rem;
        color:#66fcf1;
    }
    h5{
        color: white;
    }
    a{
        font-size: 1.1rem;
    }
    span{
        font-weight:bold;
        color:#66fcf1;
    }
    p{
        padding: 1rem 0rem;
        color: #c5c6c7;
        font-size: 1.4rem;
        line-height: 150%;
        @media (max-width: 760px){
        font-size: 1.65rem
    }
    }
`;

export default GlobalStyle;