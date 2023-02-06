import styled from "styled-components"

export const Container = styled.span`
  font-size: 1.2rem;
  padding: 8px 16px;
  border-radius: 5px;
  margin-right: 8px;

  color: ${({theme}) => theme.COLORS.WHITE};
  background: ${({theme}) => theme.COLORS.LIGHT_DARK};
`