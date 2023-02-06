import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
  border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};

  padding-right: 2.4rem;
  border-radius: 10px;

  > button {
    border: none;
    background: none;
    color: ${({theme}) => theme.COLORS.PINK};

    cursor: pointer;
  }

  > input {
     height: 56px;
     width: auto;

     padding: 1.6rem;

     background: transparent;
     color: ${({theme}) => theme.COLORS.WHITE};

     border: none;
     outline: none;

     &::placeholder{
      color: ${({theme}) => theme.COLORS.GRAY_300};
     }
  }
`