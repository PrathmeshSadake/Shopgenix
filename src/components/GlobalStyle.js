import { createGlobalStyle } from 'styled-components';

/* 
 TODO : Color Scheme 
 Black : #0b0c10
 Dark-Grey : #1f2833
 Grey : #c5c6c7
 Aqua : #66fcf1
 Dark Aqua : #45a293
*/

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
    }
    body{
        background-color: #0b0c10;
        overflow-x: hidden;
        /* font-family: 'Lato', sans-serif; */
        font-family: 'Montserrat', sans-serif;
    }
    button{
        font-weight: 500;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0.5rem 1.5rem;
        border: 2px solid #66fcf1;
    border-radius: 5px;
        background: transparent;
        color:white;
        transition: all 0.7s ease;
        a{text-decoration: none;
            text-transform: capitalize;
            color: #fff;
            &:hover{
                color: #000;
            }
        }
        &:hover{
            background-color: #66fcf1;
        }
    }
    h2{
        font-weight: 500;
        line-height: 100%;
        font-size:4rem;
    }
    h3{
        color: white;
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
    }
`;

export default GlobalStyle;