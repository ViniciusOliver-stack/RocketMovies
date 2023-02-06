import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    max-width: 850px;

    overflow-y: hidden;
  }

  .marcadores {
    display: flex;
    gap: 2.4rem;

    background-color: ${({theme}) => theme.COLORS.DARK};

    padding: 1.6rem;
    border-radius: 10px;
  }

  .buttons{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;

    margin-top: 4rem;

    border-radius: 10px;
  }
`

export const Form = styled.form`
  padding: 4.8rem 12.3rem;

  > header {
    > a {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      color: ${({ theme }) => theme.COLORS.PINK};

      font-size: 1.6rem;
      font-weight: 400;
      font-weight: 2.1rem;
    }

    > p {
      font-size: 3.6rem;
      font-weight: 500;
      line-height: 4.7rem;

      color: ${({ theme }) => theme.COLORS.WHITE};

      padding: 2.4rem 0 4rem;
    }
  }
`

export const Main = styled.main`
  margin-bottom: 4rem;

  > div {
    display: flex;
    gap: 4rem;

    margin-bottom: 4rem;
  }
`
