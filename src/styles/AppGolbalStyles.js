
import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    a{
        text-decoration: none;
        color:${props => props.fontColor};
        &:hover{
            text-decoration: none;
            color:${props => props.fontColor};
        };
    };

    body {
        color:${props => props.fontColor};
        background-image:url(${props => props.backgroundImage});
        background-repeat: no-repeat;
        background-position: center ; 
        background-size: 100vw 100vh ;
        width:95vw;
        height:100vh;
    }   
`



