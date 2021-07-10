import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// Global reset.css

const GlobalStyles = createGlobalStyle` 
    ${reset}
    *, *::before, *::after {
    box-sizing: border-box;
    }
    
    html {
        font-size: 10px;
    }
    a {
        text-decoration: none;
    }

    a:visited{
        text-decoration: none;
    }
`;

export default GlobalStyles;
