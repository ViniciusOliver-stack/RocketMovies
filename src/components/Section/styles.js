import styled from "styled-components"

export const Container = styled.div`
  > h2 {
    color: ${({theme}) => theme.COLORS.GRAY};
    font-size: 2rem;
    line-height: 2.6rem;

    margin-bottom: 2.4rem;
  }
`