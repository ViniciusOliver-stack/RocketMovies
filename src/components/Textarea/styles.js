import styled from "styled-components"

export const Container = styled.textarea`

  width: 100%;
  height: 274px;

  padding: 1.9rem 1.6rem;

  outline: none;
  border: none;
  resize: none;

  border-radius: 10px;

  background: ${({theme}) => theme.COLORS.BACKGROUND_800};
  color: ${({theme}) => theme.COLORS.WHITE};

  &::placeholder{
    color: ${({theme}) => theme.COLORS.GRAY_300};
  }
`