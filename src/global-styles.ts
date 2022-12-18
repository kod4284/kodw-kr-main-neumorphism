import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${normalize};
    body {
        background-color: #243441 !important;
    }
`;

export default GlobalStyle;
