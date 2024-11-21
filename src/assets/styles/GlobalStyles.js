import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
  font-family: 'Poppins', sans-serif;
};

li {
  list-style-type: none;
}

button, input {
  border: none;
  background-color: transparent;
}

::-webkit-scrollbar {
  width: 3px;
}

::-webkit-scrollbar-track, ::-webkit-scrollbar-thumb {
  background-color: transparent;
}
`
