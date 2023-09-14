import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import "@csstools/normalize.css";

export const GlobalStyle = createGlobalStyle`


:root {

  --toastify-color-success: #2196f3;
  --toastify-color-error: #2F303A;
}




h1,
h2,
h3,
h4 {
  color: ${(p) => p.theme.colors.primaryTitleColor};
}

h1,
h2,
h3,
h4,
p,
ul {
  margin-top: 0;
  margin-bottom: 0;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
  padding-left: 0;
}

button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
}

body {
   scroll-behavior: smooth;
  margin: 0;
  background-color:  ${(p) => p.theme.colors.primaryBgColor};
  color: ${(p) => p.theme.colors.primaryTextColor};

  font-family: ${(p) => p.theme.fontFamily.arial};
}

.img {
  display: block;
  max-width: 100%;
  height: auto;
}


button {
  cursor: pointer;
}
a {
  cursor: pointer;
}

div,
h1,
h2,
h3,
h4,
h5,
h6,
header,
html,
i,
img,
label,
li,
nav,
p,
small,
span,
ul {
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

body {
  font-family: Arial, sans-serif;
}

@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

`;
