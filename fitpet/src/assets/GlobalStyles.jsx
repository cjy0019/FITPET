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
      background: inherit ; 
      border:none;
      box-shadow:none; 
      border-radius:0;
      padding:0;
      overflow:visible;
    }

    li{
      list-style: none;
    }

    @media ${(props) => props.theme.laptop}{
      html {
        font-size: 8px;
      }
    }

    @media ${(props) => props.theme.tablet}{
      html {
        font-size: 6px;
      }
    }

    @media ${(props) => props.theme.mobile}{
      html {
        font-size: 4px;
      }
    }
`;

export default GlobalStyles;
