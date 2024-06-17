import styled from 'styled-components';

export const Container = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 16px;
  padding: 14px 24px;
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  margin: 24px 0;
  font-weight: 600;
  font-size: 15px;

  ${({ themeMode, theme }) =>
    themeMode === 'dark' &&
    `
    background-color: ${theme.COLORS.GRAY_700};
    color: ${theme.COLORS.GRAY_400};
  `}
`;
