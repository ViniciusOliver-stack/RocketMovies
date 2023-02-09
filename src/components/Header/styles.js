import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 116px;

  padding: 2.4rem 12.3rem;

  display: flex;
  align-items: center;
  gap: 6.4rem;
  justify-content: space-between;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_200};

  > h1 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;

    color: ${({theme}) => theme.COLORS.PINK};
  }
`

export const Profile = styled.div`

  width: 400px;

  display: flex;
  align-items: center;
  gap: .9rem;

  > img {
    width: 64px;
    height: 64px;

    border-radius: 50%;
  }

  > div {
    text-align: right;
    
    > p {
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.8rem;
    }

    > a {
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.8rem;

      color: ${({theme}) => theme.COLORS.GRAY_300};
    }

  }

`