import styled from "styled-components"

import backgroundImage from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  width: 340px;

  margin: 0 136px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    color: ${({theme}) => theme.COLORS.PINK};

    font-weight: 700;
    font-size: 4.8rem;
    line-height: 6.3rem;
  }

  > p {
    font-size: 1.4rem;
    line-height: 1.8rem;
    
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }

  > h2 {
    margin: 4.8rem 0;

    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3.2rem;
  }

  > button{ 
    margin: 2.4rem 0 4.2rem;
  }

  > a {
    color: ${({theme}) => theme.COLORS.PINK};
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: .8rem;
}
`

export const Background = styled.div`
  flex: 1;

  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;

`