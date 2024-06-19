import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 48px;
  border-radius: 16px;
  padding: 14px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  margin: 24px 0 0;
  display: flex;
  align-items: center;

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.COLORS.PURPLE}; /* Exemplo de estilo adicional */
  }

  input{
    width: 100%;
    height: 48px;
    border: none;
    outline: none;
    background-color: transparent;
    color: ${({theme}) => theme.COLORS.GRAY_600};
    font-weight: 600;
    font-size: 15px;

    ${({ thememode, theme }) =>
    thememode === 'dark' &&
    `
    color: ${theme.COLORS.WHITE}; 
  `}
  }
  
  svg{
    color: ${({ theme }) => theme.COLORS.PURPLE};
    cursor: pointer;
  }

  ${({ thememode, theme }) =>
    thememode === 'dark' &&
    `
    background-color: ${theme.COLORS.GRAY_700};
    color: ${theme.COLORS.WHITE};
  `}

  ${({ error, fetchError, theme }) =>
      error === 'true' || fetchError == 'true' &&
      `
      border: 1px solid ${theme.COLORS.RED}
  `}
`;

export const ErrorMessage = styled.p`
  font-size: 14px;
  padding: 5px;
  color: ${({ theme }) => theme.COLORS.RED};
`
