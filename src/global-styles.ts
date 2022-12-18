import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${normalize};
    body {
        background-color: #243441 !important;
        @font-face {
            font-family: 'Lato';
            src: local('Lato'), url(./fonts/lato/Lato-Light.ttf) format('truetype')
        }
        font-family: Lato, Arial, serif;
        font-weight: Light;
    }
`;

export default GlobalStyle;
