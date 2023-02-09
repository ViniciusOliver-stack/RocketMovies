import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  background: none;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border-radius: 10px;
  margin-bottom: 8px;

  > input {
    width: 100%;

    height: 56px;

    background: transparent;
    border: none;

    outline: none;

    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 2.4rem 1.9rem;
  }

  > input::placeholder {
    font-size: 1.4rem;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  > svg {
    margin-left: 16px;
    width: 60px;
  }
`
