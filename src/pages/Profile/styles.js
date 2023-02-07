import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    display: flex;
    align-items: center;

    padding: 0 144px;

    background: rgba(255, 133, 155, 0.05);
    > a {
      color: ${({ theme }) => theme.COLORS.PINK};

      display: flex;
      align-items: center;
      gap: 0.8rem;

      font-size: 1.6rem;
      line-height: 2.1rem;
    }
  }
`

export const Form = styled.div`
  max-width: 340px;
  margin: 64px auto 24px;

  > div:nth-child(4) {
    margin-top: 24px;
  }

  > button {
    margin-top: 24px;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -125px auto 64px;

  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;

    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;

    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    > input {
      display: none;
    }

    > svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`
