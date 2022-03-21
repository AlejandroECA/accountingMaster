
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

        /* font-family: 'Cairo', sans-serif; */
        color:${props => props.fontColor};
        background-image:url(${props => props.backgroundImage});
        /* background-image:url(${props => props.backgroundImage}); */
        background-repeat: no-repeat;
        background-position: center; 
        /* background-size: 100vw 100vh ; */
        padding:20px;
        width:95vw;
        /* max-width:100vw; */
        /* background-position-x: -200px; */ */
        /* background-position-y: -20000px; */ */

        
    }



    
`



