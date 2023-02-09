import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  border: none;
  background-color: ${({ theme, isSaved }) =>
    isSaved ? theme.COLORS.PINK : theme.COLORS.DARK};

  border-radius: 10px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  > button {
    background: none;
    color: ${({ theme, isSaved }) =>
      isSaved ? theme.COLORS.BACKGROUND_700 : theme.COLORS.PINK};

    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.1rem;

    text-align: center;
    border: none;

    padding: 1.6rem 0;
  }
`
