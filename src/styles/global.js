import { createGlobalStyle } from 'styled-components'

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
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};
}

:root{
  font-size: 62.5%;
}

*::-webkit-scrollbar {
  width: 8px;               /* width of the entire scrollbar */
  }

*::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
}

`
