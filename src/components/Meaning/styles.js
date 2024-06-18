import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  .part-of-speech{
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;

    i{
      font-weight: 500;
      font-size: 18px;
      color: ${({theme}) => theme.COLORS.GRAY_700};
    }

    hr{
      width: 100%;
      height: 1px;
      background-color: ${({theme}) => theme.COLORS.GRAY_400};
    }
  }
`