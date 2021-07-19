import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// Global reset.css

const GlobalStyles = createGlobalStyle` 
    ${reset}
    *, *::before, *::after {
    box-sizing: border-box;
    }
    
    html {
      font-family: Pretendard;
      font-size: 10px;
    }
    a {
      cursor: pointer;
      text-decoration: none;
    }

    a:visited{
      text-decoration: none;
    }
    button{
      cursor: pointer;
    }

    @media ${(props) => props.theme.laptop}{
      html {
        font-size: 8px;
      }
    }
`;

export default GlobalStyles;
