import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;

  h1 {
    font-size: 46px;
  }

  p{
    color: ${({theme}) => theme.COLORS.PURPLE};
    font-size: 18px;
  }
  
  .player{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg{
      font-size: 26px;
      color: ${({ theme }) => theme.COLORS.PURPLE};
    }

    &:hover{
      background-color: ${({ theme }) => theme.COLORS.PURPLE};

      svg{
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }
  }
`