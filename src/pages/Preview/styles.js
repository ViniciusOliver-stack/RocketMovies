import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`

export const Section = styled.section`
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

    .rateMovie{
      display: flex;
      align-items: center;
      margin: 2.4rem 0;
      gap: 1rem;

      > p {
        font-weight: 500;
        font-size: 3.6rem;
        line-height: 4.7rem;
        padding-right: 1.9rem;
      }

      > svg {
        width: 20px;
        height: 20px;
        color: ${({theme}) => theme.COLORS.PINK};
      }
      
      > svg:not(:last-child) {
        color: ${({theme}) => theme.COLORS.PINK};
        fill: ${({theme}) => theme.COLORS.PINK};
      }

    }

    .rateUser{
      display: flex;
      align-items: center;
      gap: .8rem;

      .user,
      .date{
        display: flex;
        align-items: center;
        gap: .8rem;
      }

      .user img{
        width: 16px;
        height: 16px;

        border-radius: 50%;
      }

      .user p,
      .date p{
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.9rem;

        color: ${({theme}) => theme.COLORS.WHITE};
      }

     .date svg{
        width: 16px;
        height: 16px;
        color: ${({theme}) => theme.COLORS.PINK};
     }
      
    }
  }

  .tags{
    margin: 4.8rem 0;
  }

  .resumeMovie p{
    padding-bottom: 2rem;
  }
`