import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border: none;
  border-radius: 8px;

  padding: 2.4rem;
  margin-bottom: 16px;

  cursor: pointer;

  > h1 {
    flex: 1;

    color: ${({ theme }) => theme.COLORS.WHITE};

    text-align: left;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;
  }

  > p {
    overflow: hidden; // Removendo barra de rolagem
    text-overflow: ellipsis; // Adicionando "..." ao final
    display: -webkit-box;
    -webkit-line-clamp: 2; // Quantidade de linhas
    -webkit-box-orient: vertical; 

    text-align: left;
    margin: 2rem 0;

    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;
  }

  footer {
    width: 100%;
    display: flex;
    margin-top: 2.4rem;
  }
`
