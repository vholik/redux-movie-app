import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: 'Inter', sans-serif;
    overflow-x: hidden !important;
    background-color: #15161A;

}

#root {
 display: flex;
 flex-direction: column;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}
@media screen and (max-width: 1250px) {
    .container {
        max-width: 90%;
    }
  }

`;

export default GlobalStyle;
