import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  
  font-family: 'Roboto Slab', serif;
  font-size: 1.6rem;

  text-decoration: none;
  list-style: none;

  -webkit-font-smoothing: antialiased;
}

body{
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  color: ${({theme}) => theme.COLORS.WHITE};
}

:root{
  font-size: 62.5%;
}

`