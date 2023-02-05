import styled from "styled-components"

export const Container = styled.div`
 
  width: 630px;

  background: none;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

  border-radius: 10px;

  > input {
    width: 100%;
    height: 56px;

    background: transparent;
    border: none;

    outline: none;

    color: ${({theme}) => theme.COLORS.WHITE};
    padding: 2.4rem 1.9rem;
  }

  > input::placeholder{
    font-size: 1.4rem;
    font-weight: 400;
    
    color: ${({theme}) => theme.COLORS.GRAY_300};
  }

`